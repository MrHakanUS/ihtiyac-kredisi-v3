/*
  Convert each archive/blog/<slug>/page.jsx into constants/blog/<slug>.js
  using the structure in constants/blog/0-faiz.js, then delete the source JSX.

  Usage:
    node scripts/convert-archive-blog.js [--new] [--start=<slugPrefix>] [--limit=<num>]
    
  Options:
    --new, --incremental  : Only convert new blogs (skip if .js already exists)
    --start=<slug>        : Start from a specific slug
    --limit=<num>         : Limit number of conversions
    
  Examples:
    npm run blog:new      : Convert only new blogs (recommended)
    npm run blog:convert  : Convert all blogs
*/

import fs from 'fs'
import path from 'path'

const ROOT_DIR = process.cwd()
const ARCHIVE_DIR = path.join(ROOT_DIR, 'archive', 'blog')
const OUT_DIR = path.join(ROOT_DIR, 'constants', 'blog')

function ensureOutDir() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

function writeText(filePath, text) {
  fs.writeFileSync(filePath, text, 'utf8')
}

function removeFile(filePath) {
  if (fs.existsSync(filePath)) fs.rmSync(filePath)
}

function listArchiveSlugs() {
  if (!fs.existsSync(ARCHIVE_DIR)) return []
  return fs
    .readdirSync(ARCHIVE_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
}

function pickMetaFromExport(block) {
  if (!block) return { title: '', description: '' }
  const titleMatch = block.match(/\btitle\s*:\s*(['"])([\s\S]*?)\1/)
  const descriptionMatch = block.match(/\bdescription\s*:\s*(['"])([\s\S]*?)\1/)
  return {
    title: titleMatch ? titleMatch[2].trim() : '',
    description: descriptionMatch ? descriptionMatch[2].trim() : ''
  }
}

function pickMetaFromHead(src) {
  const titleMatch = src.match(/<title>([\s\S]*?)<\/title>/i)
  const metaDescMatch = src.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i)
  return {
    title: titleMatch ? stripSpaces(titleMatch[1]) : '',
    description: metaDescMatch ? stripSpaces(metaDescMatch[1]) : ''
  }
}

function pickDateFromJsonLd(src) {
  const dateMatch = src.match(/\"datePublished\"\s*:\s*\"(\d{4}-\d{2}-\d{2})\"/)
  const dateIso = dateMatch ? dateMatch[1] : ''
  return { date: dateIso, dateIso }
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
}

function stripSpaces(s) {
  return (s || '')
    .replace(/\s+/g, ' ')
    .replace(/\u00A0/g, ' ')
    .trim()
}

function jsStringLiteral(s) {
  const safe = (s || '')
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/\r?\n|\r/g, ' ')
  return `'${safe}'`
}

function extractKeywords({ title, slug }) {
  const base = []
  if (title) base.push(...title.toLowerCase().split(/[^a-z0-9çğıöşüâêîôû\-]+/i))
  if (slug) base.push(...slug.toLowerCase().split(/\-+/))
  const words = base
    .map(w => w.trim())
    .filter(w => w && w.length >= 3)
  const unique = Array.from(new Set(words))
  return unique.slice(0, 12)
}

function extractBlocksInOrder(src) {
  const blocks = []
  const regex = /<(h[1-3]|p|ul|ol|table)\b[^>]*>[\s\S]*?<\/\1>/gi
  let match
  while ((match = regex.exec(src)) !== null) {
    blocks.push({ tag: match[1].toLowerCase(), html: match[0], index: match.index })
  }
  blocks.sort((a, b) => a.index - b.index)
  return blocks
}

function parseList(html, tag) {
  const itemMatches = html.match(/<li\b[^>]*>[\s\S]*?<\/li>/gi) || []
  const items = itemMatches.map(m => stripSpaces(stripTags(m))).filter(t => t.length > 0)
  return { type: 'list', style: tag === 'ol' ? 'ordered' : 'unordered', items }
}

function parseTable(html) {
  const headers = []
  const headerBlock = html.match(/<thead[\s\S]*?<\/thead>/i)
  if (headerBlock) {
    const ths = headerBlock[0].match(/<th\b[^>]*>[\s\S]*?<\/th>/gi) || []
    for (const th of ths) headers.push(stripSpaces(stripTags(th)))
  }
  const rows = []
  const tbody = html.match(/<tbody[\s\S]*?<\/tbody>/i)
  const rowBlocks = (tbody ? tbody[0] : html).match(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi) || []
  for (const tr of rowBlocks) {
    const tds = tr.match(/<t[dh]\b[^>]*>[\s\S]*?<\/t[dh]>/gi) || []
    const row = tds.map(td => stripSpaces(stripTags(td)))
    if (row.length > 0) rows.push(row)
  }
  return { type: 'table', caption: '', headers, rows }
}

function buildContent(src) {
  const content = []
  const blocks = extractBlocksInOrder(src)
  for (const b of blocks) {
    if (b.tag === 'p') {
      const text = stripSpaces(stripTags(b.html))
      if (text) content.push({ type: 'paragraph', text })
      continue
    }
    if (b.tag === 'h1' || b.tag === 'h2' || b.tag === 'h3') {
      const text = stripSpaces(stripTags(b.html))
      const level = parseInt(b.tag.substring(1), 10)
      if (text) content.push({ type: 'heading', level, text })
      continue
    }
    if (b.tag === 'ul' || b.tag === 'ol') {
      const list = parseList(b.html, b.tag)
      if (list.items.length > 0) content.push(list)
      continue
    }
    if (b.tag === 'table') {
      const table = parseTable(b.html)
      if (table.rows.length > 0) content.push(table)
      continue
    }
  }
  return content
}

function buildFaq(content) {
  const faq = []
  for (let i = 0; i < content.length; i += 1) {
    const item = content[i]
    const next = content[i + 1]
    if (item.type === 'heading' && item.level >= 3 && /\?\s*$/.test(item.text) && next && next.type === 'paragraph') {
      faq.push({ question: item.text, answer: next.text })
    }
  }
  return faq
}

function toJsExport({ slug, meta, content, faq }) {
  const varName = `blog_${slug.replace(/[^a-z0-9]+/gi, '_')}`

  const lines = []
  lines.push(`export const ${varName} = {`)
  lines.push(`  slug: ${jsStringLiteral(slug)},`)
  lines.push(`  meta: {`)
  lines.push(`    title: ${jsStringLiteral(meta.title || '')},`)
  lines.push(`    description: ${jsStringLiteral(meta.description || '')},`)
  const keywords = meta.keywords || []
  if (keywords.length > 0) {
    lines.push(`    keywords: [`)
    for (const k of keywords) lines.push(`      ${jsStringLiteral(k)},`)
    lines.push(`    ],`)
  } else {
    lines.push(`    keywords: [],`)
  }
  lines.push(`    canonical: ${jsStringLiteral(meta.canonical || `/blog/${slug}`)},`)
  if (meta.category) lines.push(`    category: ${jsStringLiteral(meta.category)},`)
  if (meta.date) lines.push(`    date: ${jsStringLiteral(meta.date)},`)
  if (meta.dateIso) lines.push(`    dateIso: ${jsStringLiteral(meta.dateIso)},`)
  lines.push(`  },`)

  lines.push(`  content: [`)
  for (const c of content) {
    if (c.type === 'paragraph') {
      lines.push(`    { type: 'paragraph', text: ${jsStringLiteral(c.text)} },`)
    } else if (c.type === 'heading') {
      lines.push(`    { type: 'heading', level: ${c.level}, text: ${jsStringLiteral(c.text)} },`)
    } else if (c.type === 'list') {
      lines.push(`    { type: 'list', style: ${jsStringLiteral(c.style)}, items: [`)
      for (const it of c.items) lines.push(`      ${'  '}${jsStringLiteral(it)},`)
      lines.push(`    ]},`)
    } else if (c.type === 'table') {
      lines.push(`    { type: 'table', caption: '', headers: [`)
      for (const h of c.headers) lines.push(`      ${'  '}${jsStringLiteral(h)},`)
      lines.push(`    ], rows: [`)
      for (const r of c.rows) {
        lines.push(`      [${r.map(cell => jsStringLiteral(cell)).join(', ')}],`)
      }
      lines.push(`    ]},`)
    }
  }
  lines.push(`  ],`)

  lines.push(`  faq: [`)
  for (const f of faq) {
    lines.push(`    { question: ${jsStringLiteral(f.question)}, answer: ${jsStringLiteral(f.answer)} },`)
  }
  lines.push(`  ],`)
  lines.push(`  related: [],`)
  lines.push(`}`)

  return lines.join('\n') + '\n'
}

function convertOne(slug, { skipExisting = false } = {}) {
  const jsxPath = path.join(ARCHIVE_DIR, slug, 'page.jsx')
  const outPath = path.join(OUT_DIR, `${slug}.js`)
  if (!fs.existsSync(jsxPath)) return { slug, skipped: true, reason: 'no page.jsx' }
  
  // Skip if already converted (incremental mode)
  if (skipExisting && fs.existsSync(outPath)) {
    return { slug, skipped: true, reason: 'already exists' }
  }

  const src = readText(jsxPath)

  // metadata export
  let title = ''
  let description = ''
  const metaExportMatch = src.match(/export\s+const\s+metadata\s*=\s*\{([\s\S]*?)\}\s*;?/)
  if (metaExportMatch) {
    const meta = pickMetaFromExport(metaExportMatch[1])
    title = meta.title || title
    description = meta.description || description
  }

  // head tags
  const headMeta = pickMetaFromHead(src)
  if (!title && headMeta.title) title = headMeta.title
  if (!description && headMeta.description) description = headMeta.description

  // date from JSON-LD
  const dateInfo = pickDateFromJsonLd(src)

  const meta = {
    title,
    description,
    keywords: extractKeywords({ title, slug }),
    canonical: `/blog/${slug}`,
    date: dateInfo.date,
    dateIso: dateInfo.dateIso,
  }

  const content = buildContent(src)
  const faq = buildFaq(content)

  const js = toJsExport({ slug, meta, content, faq })
  writeText(outPath, js)

  // remove original JSX
  removeFile(jsxPath)
  return { slug, outPath, removed: true }
}

function main() {
  ensureOutDir()
  const args = process.argv.slice(2)
  const startPrefixArg = args.find(a => a.startsWith('--start='))
  const limitArg = args.find(a => a.startsWith('--limit='))
  const newOnlyFlag = args.includes('--new') || args.includes('--incremental')
  const startPrefix = startPrefixArg ? startPrefixArg.split('=')[1] : ''
  const limit = limitArg ? Math.max(0, parseInt(limitArg.split('=')[1], 10)) : 0

  let slugs = listArchiveSlugs()
  if (startPrefix) slugs = slugs.filter(s => s >= startPrefix)
  slugs.sort()
  if (limit > 0) slugs = slugs.slice(0, limit)
 

  const results = []
  for (const slug of slugs) {
    try {
      const res = convertOne(slug, { skipExisting: newOnlyFlag })
      results.push(res)
      if (res.removed) {
        // eslint-disable-next-line no-console 
      } else if (res.skipped && res.reason !== 'already exists') {
        // eslint-disable-next-line no-console 
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`✗ [error] ${slug}`, err.message)
    }
  }
  
  const converted = results.filter(r => r.removed).length
  const skipped = results.filter(r => r.skipped).length
  const alreadyExists = results.filter(r => r.skipped && r.reason === 'already exists').length
   
  if (alreadyExists > 0) {
    // eslint-disable-next-line no-console 
  }
}

main()


