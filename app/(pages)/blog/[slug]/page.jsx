import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import AdZoneComponent from '@/components/common/AdZoneComponent';
import { getBlogBySlug, getAllBlogSlugs, getRecentBlogPosts } from '@/services/blog';

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  if (!slug) return {}
  const post = await getBlogBySlug(slug)
  
  const { generateBlogMetadataWithSchema } = await import('@/utils/metadataWithSchema')
  return generateBlogMetadataWithSchema(post, slug)
}

async function BlogPostPage({ params }) {
  const { slug } = await params
  if (!slug) notFound()
  const post = await getBlogBySlug(slug)
  if (!post) notFound()

  const breadcrumbItems = [
    { label: 'ihtiyackredisi.com', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.meta?.title || post.slug },
  ];

  const recent = await getRecentBlogPosts(5)

  return (
    <main>
      <div className=''>
        <div className='custom-container-1 flex flex-col items-center px-4 pt-[40px] sm:pt-[56px]'>
          <div className='w-full flex justify-start items-center text-center'>
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div className='custom-container-1 flex flex-col gap-y-[24px] px-4'>
        <header className='w-full mx-auto'>
          <div className='relative overflow-hidden'>
            <div className='absolute inset-0 pointer-events-none' />
            <h1 className='relative font-semibold text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-[40px] lg:leading-[48px] text-slate-900'>
              {post.meta?.title}
            </h1>
          </div>
        </header>

        <div className='w-full mx-auto grid grid-cols-1 gap-[24px] lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-[32px] xl:grid-cols-[minmax(0,1fr)_400px]'>
          <article className=''>
            <ContentRenderer content={post.content} />

            {Array.isArray(post.faq) && post.faq.length > 0 && (
              <section aria-labelledby='faq-heading' className='mt-[32px] sm:mt-[48px] lg:mt-[64px]'>
                <h2 id='faq-heading' className='font-semibold text-[20px] leading-[28px] text-slate-900'>Sık Sorulan Sorular</h2>
                <dl className='mt-[12px] space-y-[12px]'>
                  {post.faq.map((item, i) => (
                    <div key={i} className='rounded-[12px] border border-slate-200 p-[16px] bg-white'>
                      <dt className='font-medium text-slate-900'>{item.question}</dt>
                      <dd className='mt-[6px] text-[15px] leading-[24px] text-slate-700'>{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </article>

          <aside className='flex flex-col gap-[16px] lg:sticky lg:top-[96px]'>
            <h2 className='font-medium text-[16px] leading-[22px] text-slate-900'>
              Son Yazılar
            </h2>
            <ul className='flex flex-col gap-[16px]'>
              {recent.map((r, i) => (
                <li key={i}>
                  <Link href={`/blog/${r.slug}`} className='block rounded-[12px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2'>
                    <article className='group bg-white border border-slate-200 hover:border-primary transition-colors duration-300 rounded-[16px] p-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]'>
                      <div className='mb-[8px]'>
                        <h3 className='font-medium text-[16px] leading-[22px] text-slate-900 group-hover:text-primary transition-colors'>
                          {r.meta?.title || r.slug}
                        </h3>
                      </div>
                      {r.meta?.description && (
                        <p className='text-[13px] leading-[18px] text-slate-600 line-clamp-3'>
                          {r.meta.description}
                        </p>
                      )}
                    </article>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className='max-w-[1200px] w-full mx-auto'>
          <AdZoneComponent src={'/adzone.png'} />
        </div>
      </div>
    </main>
  );
}

export default BlogPostPage;

function ContentRenderer({ content }) {
  if (!Array.isArray(content) || content.length === 0) return null
  return (
    <div className='prose prose-slate max-w-none'>
      {content.map((block, index) => (
        <ContentBlock key={index} block={block} />
      ))}
    </div>
  )
}

function ContentBlock({ block }) {
  if (!block || typeof block !== 'object') return null
  const type = block.type
  if (type === 'heading') return renderHeading(block)
  if (type === 'paragraph') return renderParagraph(block)
  if (type === 'link') return renderLink(block)
  if (type === 'list') return renderList(block)
  if (type === 'table') return renderTable(block)
  if (type === 'blockquote') return renderBlockquote(block)
  if (type === 'code') return renderCode(block)
  return null
}

function renderHeading(block) {
  const level = Number(block.level) || 2
  const text = block.text || ''
  if (!text) return null
  if (level === 1) return (<h1 className='font-semibold text-slate-900'>{text}</h1>)
  if (level === 2) return (<h2 className='font-semibold text-slate-900'>{text}</h2>)
  if (level === 3) return (<h3 className='font-semibold text-slate-900'>{text}</h3>)
  if (level === 4) return (<h4 className='font-semibold text-slate-900'>{text}</h4>)
  return (<h2 className='font-semibold text-slate-900'>{text}</h2>)
}

function renderParagraph(block) {
  const text = block.text || ''
  if (!text) return null
  
  // Eğer paragraph içinde link varsa parse et
  if (block.links && Array.isArray(block.links) && block.links.length > 0) {
    return renderParagraphWithLinks(block)
  }
  
  return (
    <p className='text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] text-slate-700'>
      {text}
    </p>
  )
}

function renderParagraphWithLinks(block) {
  const text = block.text || ''
  const links = block.links || []
  
  if (links.length === 0) {
    return (
      <p className='text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] text-slate-700'>
        {text}
      </p>
    )
  }
  
  // Text'i link'lerle böl ve render et
  let parts = []
  let lastIndex = 0
  
  // Link'leri sırala (başlangıç pozisyonuna göre)
  const sortedLinks = [...links].sort((a, b) => (a.start || 0) - (b.start || 0))
  
  sortedLinks.forEach((link, index) => {
    const start = link.start || 0
    const end = link.end || text.length
    const href = link.href || '#'
    const linkText = link.text || text.substring(start, end)
    
    // Link'ten önceki text
    if (start > lastIndex) {
      parts.push({ type: 'text', content: text.substring(lastIndex, start) })
    }
    
    // Link
    parts.push({ type: 'link', href, text: linkText })
    
    lastIndex = end
  })
  
  // Kalan text
  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.substring(lastIndex) })
  }
  
  return (
    <p className='text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] text-slate-700'>
      {parts.map((part, i) => {
        if (part.type === 'link') {
          const isExternal = part.href.startsWith('http://') || part.href.startsWith('https://')
          return (
            <Link
              key={i}
              href={part.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className='text-primary hover:underline font-medium'
            >
              {part.text}
            </Link>
          )
        }
        return <span key={i}>{part.content}</span>
      })}
    </p>
  )
}

function renderLink(block) {
  const text = block.text || ''
  const href = block.href || '#'
  if (!text || !href) return null
  
  const isExternal = href.startsWith('http://') || href.startsWith('https://')
  
  return (
    <p className='text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] text-slate-700'>
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className='text-primary hover:underline font-medium'
      >
        {text}
      </Link>
    </p>
  )
}

function renderList(block) {
  const items = Array.isArray(block.items) ? block.items : []
  if (items.length === 0) return null
  const isOrdered = block.style === 'ordered'
  if (isOrdered)
    return (
      <ol className='list-decimal pl-6 space-y-1'>
        {items.map((it, i) => (<li key={i}>{it}</li>))}
      </ol>
    )
  return (
    <ul className='list-disc pl-6 space-y-1'>
      {items.map((it, i) => (<li key={i}>{it}</li>))}
    </ul>
  )
}

function renderTable(block) {
  const headers = Array.isArray(block.headers) ? block.headers : []
  const rows = Array.isArray(block.rows) ? block.rows : []
  if (headers.length === 0 && rows.length === 0) return null
  return (
    <figure className='my-[16px]'>
      {block.caption ? (
        <figcaption className='text-sm text-slate-500 mb-2'>{block.caption}</figcaption>
      ) : null}
      <div className='ik-table-wrapper'>
        <table className='ik-table'>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} scope='col' className='font-medium'>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIndex) => (
              <tr key={rIndex}>
                {row.map((cell, cIndex) => {
                  const label = headers[cIndex] || `Sütun ${cIndex + 1}`
                  return (
                    <td key={cIndex} data-label={label}>{cell}</td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  )
}

function renderBlockquote(block) {
  const text = block.text || ''
  if (!text) return null
  return (
    <blockquote className='border-l-4 border-slate-200 pl-4 italic text-slate-700'>{text}</blockquote>
  )
}

function renderCode(block) {
  const code = block.code || ''
  if (!code) return null
  return (
    <pre className='rounded-[12px] border border-slate-200 bg-slate-50 p-4 overflow-x-auto'>
      <code>{code}</code>
    </pre>
  )
}