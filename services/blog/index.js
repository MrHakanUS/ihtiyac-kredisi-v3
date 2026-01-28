// Server-only blog loader that auto-reads constants/blog and exposes helpers
import fs from 'fs'
import path from 'path'

const BLOG_DIR = path.join(process.cwd(), 'constants', 'blog')

let cachedPosts = null
let cachedMtimesKey = ''

function getDirectoryStateKey() {
  if (!fs.existsSync(BLOG_DIR)) return ''
  const entries = fs.readdirSync(BLOG_DIR)
  const parts = entries
    .filter(name => name.endsWith('.js') && name !== 'template.js')
    .map(name => {
      const full = path.join(BLOG_DIR, name)
      const stat = fs.statSync(full)
      return `${name}:${stat.mtimeMs}`
    })
  return parts.sort().join('|')
}

async function importByName(fileName) {
  // Let webpack create a context for constants/blog/*.js excluding template.js
  // This keeps modules in the bundle and avoids <dynamic> resolution errors
  // eslint-disable-next-line import/no-dynamic-require
  const mod = await import(
    /* webpackInclude: /\.js$/ */
    /* webpackExclude: /template\.js$/ */
    `@/constants/blog/${fileName}`
  )
  return mod
}

function normalizePost(raw, fileMeta) {
  if (!raw || typeof raw !== 'object') return null
  if (!raw.slug || typeof raw.slug !== 'string') return null
  // Ensure shape for consumers
  const meta = raw.meta || {}
  const content = Array.isArray(raw.content) ? raw.content : []
  const faq = Array.isArray(raw.faq) ? raw.faq : []
  const related = Array.isArray(raw.related) ? raw.related : []
  const keywords = Array.isArray(meta.keywords) ? meta.keywords : []
  const category = typeof meta.category === 'string' && meta.category.trim().length > 0
    ? meta.category
    : (keywords[0] || 'Genel')
  return {
    slug: raw.slug,
    meta: {
      title: meta.title || '',
      description: meta.description || '',
      keywords,
      canonical: meta.canonical || `/blog/${raw.slug}`,
      category,
      date: meta.date || '',
      dateIso: meta.dateIso || '',
    },
    // Derived fields for convenience in list UIs
    title: meta.title || raw.slug,
    excerpt: meta.description || '',
    category,
    date: meta.date || '',
    dateIso: meta.dateIso || '',
    href: `/blog/${raw.slug}`,
    content,
    faq,
    related,
    __fileMeta: fileMeta,
  }
}

export async function getAllBlogPosts() {
  const stateKey = getDirectoryStateKey()
  if (cachedPosts && stateKey === cachedMtimesKey) return cachedPosts

  if (!fs.existsSync(BLOG_DIR)) return []

  const fileNames = fs
    .readdirSync(BLOG_DIR)
    .filter(name => name.endsWith('.js') && name !== 'template.js')

  const posts = []
  for (const name of fileNames) {
    const full = path.join(BLOG_DIR, name)
    const stat = fs.statSync(full)
    try {
      const mod = await importByName(name)
      const candidate = pickExportedPost(mod)
      const post = normalizePost(candidate, { fileName: name, mtimeMs: stat.mtimeMs })
      if (post) posts.push(post)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to import blog file', name, err)
    }
  }

  posts.sort((a, b) => b.__fileMeta.mtimeMs - a.__fileMeta.mtimeMs)

  cachedPosts = posts
  cachedMtimesKey = stateKey
  return posts
}

// Optimized function for pagination with search
export async function getBlogPosts({ page = 1, pageSize = 12, search = '', category = '' }) {
  const allPosts = await getAllBlogPosts()
  
  let filtered = allPosts
  if (search) {
    const s = search.toLowerCase()
    filtered = filtered.filter((p) => 
      p.title.toLowerCase().includes(s) || 
      p.excerpt.toLowerCase().includes(s)
    )
  }
  
  if (category && category !== 'Tümü') {
    filtered = filtered.filter(p => p.category === category)
  }
  
  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * pageSize
  const posts = filtered.slice(start, start + pageSize)
  
  return {
    posts,
    pagination: {
      current: currentPage,
      total: totalPages,
      pageSize,
      totalPosts: total
    }
  }
}

// Get unique categories for filtering
export async function getBlogCategories() {
  const posts = await getAllBlogPosts()
  const categories = new Set(['Tümü'])
  posts.forEach(post => {
    if (post.category) categories.add(post.category)
  })
  return Array.from(categories)
}

function pickExportedPost(mod) {
  if (!mod || typeof mod !== 'object') return null
  if (mod.default && mod.default.slug) return mod.default
  for (const key of Object.keys(mod)) {
    const value = mod[key]
    if (value && typeof value === 'object' && value.slug) return value
  }
  return null
}

export async function getBlogBySlug(slug) {
  if (!slug) return null
  const posts = await getAllBlogPosts()
  return posts.find(p => p.slug === slug) || null
}

export async function getAllBlogSlugs() {
  const posts = await getAllBlogPosts()
  return posts.map(p => p.slug)
}

export async function getRecentBlogPosts(limit = 5) {
  const posts = await getAllBlogPosts()
  return posts.slice(0, limit)
}


