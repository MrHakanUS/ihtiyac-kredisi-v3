import React from 'react'
import Link from 'next/link'
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent'
import { getBlogPosts, getBlogCategories } from '@/services/blog'
import CORE from '@/CORE2'

export async function generateMetadata() {
  const metadata = CORE['/blog']
  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: '/blog',
    },
  }
}

async function BlogPage({ searchParams }) {
  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Blog' },
  ]

  const search = searchParams?.q?.trim() || ''
  const category = searchParams?.category || 'Tümü'
  const page = parseInt(searchParams?.page || '1', 10)

  // Fetch data server-side with pagination
  const { posts, pagination } = await getBlogPosts({
    page,
    pageSize: 12,
    search,
    category: category !== 'Tümü' ? category : ''
  })

  const categories = await getBlogCategories()

  return (
    <main>
      <div className='custom-container-1 flex flex-col items-center px-4 pt-[56px]'>
        <div className='max-w-[920px] w-full flex justify-center items-center text-center'>
          <BreadcrumbComponent items={breadcrumbItems} />
        </div>
      </div>

      <div className='custom-container-1 py-8 px-4'>
        <div className='flex flex-col gap-y-[24px]'>
          <div className='mb-[32px]'>
            <Hero />
          </div>

          <Filters categories={categories} activeCategory={category} q={search} />

          <section aria-label='Blog Yazıları' className='max-w-[1200px] w-full mx-auto'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]'>
              {posts.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          </section>

          {pagination.total > 1 && (
            <Pagination 
              current={pagination.current} 
              totalPages={pagination.total} 
              q={search} 
              category={category} 
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default BlogPage;

function Hero() {
  return (
    <header className='max-w-[1200px] w-full mx-auto'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none' />
        <h1 className='relative font-semibold text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] text-slate-900'>
          Blog
        </h1>
      </div>
    </header>
  );
}

function Filters({ categories, activeCategory, q }) {
  const buildHref = ({ q, category, page = 1 }) => {
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (category && category !== 'Tümü') params.set('category', category)
    if (page && page !== 1) params.set('page', String(page))
    const search = params.toString()
    return search ? `?${search}` : '/blog'
  }

  return (
    <div className='max-w-[1200px] w-full mx-auto'>
      <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-[12px]'>
          <div className='flex flex-wrap gap-[8px]'>
            {categories.slice(0, 8).map((cat) => {
              const isActive = cat === activeCategory
              return (
                <Link
                  key={cat}
                  href={buildHref({ q, category: cat })}
                  aria-current={isActive ? 'true' : undefined}
                  className={`${
                    isActive
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-slate-700 hover:text-primary'
                  } inline-flex items-center gap-[8px] h-[32px] px-[12px] rounded-[999px] border border-slate-200 hover:border-primary/40 transition-colors shrink-0 text-[12px] leading-[16px]`}
                >
                  {cat}
                </Link>
              )
            })}
          </div>

          <form
            action='/blog'
            method='GET'
            className='sm:ml-auto w-full sm:w-[360px]'
          >
            {activeCategory && activeCategory !== 'Tümü' && (
              <input type='hidden' name='category' value={activeCategory} />
            )}
            <label className='sr-only' htmlFor='q'>
              Ara
            </label>
            <div className='relative'>
              <input
                id='q'
                name='q'
                defaultValue={q}
                placeholder='Arama yapın...'
                className='w-full h-[40px] rounded-[12px] border border-slate-200 bg-white px-[12px] pr-[36px] text-[14px] leading-[20px] text-slate-900 placeholder:text-slate-400 outline-none focus:border-primary/50'
              />
              <button
                type='submit'
                className='absolute right-[6px] top-1/2 -translate-y-1/2 size-[28px] rounded-[8px] text-slate-600 hover:text-primary transition-colors focus:outline-none'
                aria-label='Ara'
              >
                <span aria-hidden>↵</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function BlogCard({ post }) {
  function asciiSlug(s) {
    if (!s) return ''
    return s
      .replace(/Ç/g, 'C').replace(/ç/g, 'c')
      .replace(/Ğ/g, 'G').replace(/ğ/g, 'g')
      .replace(/İ/g, 'I').replace(/ı/g, 'i')
      .replace(/Ö/g, 'O').replace(/ö/g, 'o')
      .replace(/Ş/g, 'S').replace(/ş/g, 's')
      .replace(/Ü/g, 'U').replace(/ü/g, 'u')
      .toLowerCase()
      .replace(/[^a-z0-9\-]+/g, '-')
      .replace(/\-+/g, '-')
      .replace(/^-+|-+$/g, '')
  }
  
  const href = `/blog/${asciiSlug(post.slug)}`
  
  return (
    <article className='group bg-white border border-slate-200 hover:border-primary transition-colors duration-300 rounded-[16px] p-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.03)] h-full'>
      <Link href={href} className='block focus:outline-none rounded-[8px]'>
        <div className='mb-[16px] border-b border-slate-200 pb-[8px] gap-y-[8px] flex flex-col transition-colors duration-300'>
          <h3 className='font-medium text-[16px] leading-[22px] text-slate-900 transition-colors break-words'>
            {post.title}
          </h3>

          {post.category && (
            <div className='flex items-center gap-x-[12px] text-[12px] leading-[16px] text-slate-500 mb-[10px]'>
              <span className='inline-flex items-center rounded-[999px] bg-slate-100 text-slate-700 px-[8px] h-[22px]'>
                {post.category}
              </span>
              {post.date && (
                <>
                  <span className='size-[4px] rounded-full bg-slate-300' />
                  <time dateTime={post.dateIso}>{post.date}</time>
                </>
              )}
            </div>
          )}
        </div>
        {post.excerpt && (
          <p className='text-[13px] leading-[18px] text-slate-600 line-clamp-3'>
            {post.excerpt}
          </p>
        )}
        <div className='mt-[12px] inline-flex items-center gap-[6px] text-[13px] leading-[18px] text-slate-700 group-hover:text-primary transition-colors duration-300'>
          <span>Daha fazla oku</span>
          <span
            aria-hidden
            className='transition-transform group-hover:translate-x-[2px]'
          >
            →
          </span>
        </div>
      </Link>
    </article>
  )
}

function Pagination({ current, totalPages, q, category }) {
  const buildHref = (page) => {
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (category && category !== 'Tümü') params.set('category', category)
    if (page && page !== 1) params.set('page', String(page))
    const search = params.toString()
    return search ? `?${search}` : '/blog'
  }

  const items = renderPagination({ current, total: totalPages })

  return (
    <nav aria-label='Sayfalandırma' className='max-w-[1200px] w-full mx-auto'>
      <ul className='flex flex-wrap items-center justify-center gap-[8px] pt-[16px]'>
        <li>
          {current > 1 ? (
            <Link
              href={buildHref(current - 1)}
              className='size-[32px] grid place-items-center rounded-[8px] border border-slate-200 hover:border-primary/40 text-slate-600 hover:text-primary transition-colors'
              aria-label='Önceki sayfa'
            >
              ‹
            </Link>
          ) : (
            <span className='size-[32px] grid place-items-center rounded-[8px] border border-slate-100 text-slate-300'>
              ‹
            </span>
          )}
        </li>

        {items.map((item, i) => (
          <li key={i}>
            {item.type === 'page' ? (
              <Link
                href={buildHref(item.label)}
                aria-current={item.isActive ? 'page' : undefined}
                className={`${
                  item.isActive
                    ? 'bg-primary text-white'
                    : 'bg-white text-slate-700 hover:text-primary'
                } h-[32px] min-w-[32px] inline-flex items-center justify-center tabular-nums rounded-[8px] border border-slate-200 hover:border-primary/40 transition-colors px-[10px]`}
              >
                {item.label}
              </Link>
            ) : (
              <span className='px-1 text-slate-400'>…</span>
            )}
          </li>
        ))}

        <li>
          {current < totalPages ? (
            <Link
              href={buildHref(current + 1)}
              className='size-[32px] grid place-items-center rounded-[8px] border border-slate-200 hover:border-primary/40 text-slate-600 hover:text-primary transition-colors'
              aria-label='Sonraki sayfa'
            >
              ›
            </Link>
          ) : (
            <span className='size-[32px] grid place-items-center rounded-[8px] border border-slate-100 text-slate-300'>
              ›
            </span>
          )}
        </li>
      </ul>
    </nav>
  )
}

function renderPagination({ current, total }) {
  if (!Number.isFinite(current) || !Number.isFinite(total) || total < 1) return []
  const items = []
  const addPage = (page) =>
    items.push({ type: 'page', label: page, isActive: page === current })
  const addEllipsis = () => items.push({ type: 'ellipsis' })

  const pagesSet = new Set()

  const firstBlockEnd = Math.min(5, total)
  for (let p = 1; p <= firstBlockEnd; p += 1) pagesSet.add(p)

  if (total >= 2) {
    pagesSet.add(total - 1)
    pagesSet.add(total)
  }

  if (current > 5 && current < total - 1) pagesSet.add(current)

  const pages = Array.from(pagesSet)
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b)

  let prev = null
  for (const p of pages) {
    if (prev !== null && p - prev > 1) addEllipsis()
    addPage(p)
    prev = p
  }

  return items
}
