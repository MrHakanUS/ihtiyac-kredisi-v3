/*
  Normalize slugs in constants/blog: convert Turkish chars to ASCII, update slug & meta.canonical, rename files.
  Usage:
    node scripts/normalize-blog-slugs.js [--dry]
*/

import fs from 'fs'
import path from 'path'

const ROOT_DIR = process.cwd()
const BLOG_DIR = path.join(ROOT_DIR, 'constants', 'blog')

function turkishToAscii(input) {
  if (!input) return ''
  return input
    .replace(/Ç/g, 'C').replace(/ç/g, 'c')
    .replace(/Ğ/g, 'G').replace(/ğ/g, 'g')
    .replace(/İ/g, 'I').replace(/ı/g, 'i')
    .replace(/Ö/g, 'O').replace(/ö/g, 'o')
    .replace(/Ş/g, 'S').replace(/ş/g, 's')
    .replace(/Ü/g, 'U').replace(/ü/g, 'u')
}

function normalizeSlug(slug) {
  const ascii = turkishToAscii(slug)
  return ascii
    .toLowerCase()
    .replace(/[^a-z0-9\-]+/g, '-')
    .replace(/\-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function read(file) { return fs.readFileSync(file, 'utf8') }
function write(file, txt) { fs.writeFileSync(file, txt, 'utf8') }

function updateContentSlug(code, oldSlug, newSlug) {
  // Update slug: '...' and meta.canonical: '/blog/...'
  let out = code
  const safeOld = oldSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  out = out.replace(new RegExp(`slug:\s*['"]${safeOld}['"]`,'g'), `slug: '${newSlug}'`)
  out = out.replace(new RegExp(`canonical:\s*['"]/blog/${safeOld}['"]`,'g'), `canonical: '/blog/${newSlug}'`)
  return out
}

function main() {
  const args = process.argv.slice(2)
  const isDry = args.includes('--dry')
  if (!fs.existsSync(BLOG_DIR)) return
  const files = fs.readdirSync(BLOG_DIR).filter(n => n.endsWith('.js') && n !== 'template.js')
  const RENAMES = []
  for (const name of files) {
    const full = path.join(BLOG_DIR, name)
    const src = read(full)
    const slugMatch = src.match(/slug:\s*['"]([\s\S]*?)['"]/)
    if (!slugMatch) continue
    const oldSlug = slugMatch[1]
    const newSlug = normalizeSlug(oldSlug)
    if (oldSlug === newSlug) continue
    const updated = updateContentSlug(src, oldSlug, newSlug)
    const newFile = path.join(BLOG_DIR, `${newSlug}.js`)
    RENAMES.push({ from: full, to: newFile, oldSlug, newSlug, updated })
  }

  for (const r of RENAMES) {
    if (isDry) {
      // eslint-disable-next-line no-console 
      continue
    }
    write(r.from, r.updated)
    // If filename doesn't match new slug, rename
    const toName = r.to
    if (path.basename(r.from) !== path.basename(toName)) {
      if (fs.existsSync(toName)) fs.rmSync(toName)
      fs.renameSync(r.from, toName)
    }
    // eslint-disable-next-line no-console 
  }
  // eslint-disable-next-line no-console 
}

main()


