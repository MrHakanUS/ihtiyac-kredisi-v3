import React from 'react'

function HeadingComponent({ title, subtitle, highlight, as = 'h2' }) {
  const HeadingTag = as

  let headingContent = title
  if (highlight && typeof title === 'string') {
    const index = title.indexOf(highlight)
    if (index > -1) {
      const before = title.slice(0, index)
      const after = title.slice(index + highlight.length)
      const renderedHighlight = (
        <span className='text-accent' data-highlight='true'>
          {highlight.split(/(0)/).map((part, i) =>
            part === '0' ? <span key={i} className='font-mono'>0</span> : <span key={i}>{part}</span>
          )}
        </span>
      )
      headingContent = <>{before}{renderedHighlight}{after}</>
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-y-[12px] sm:gap-y-[16px] w-full mb-[40px] sm:mb-[48px] md:mb-[56px] px-[8px]'>
        <HeadingTag className='font-semibold text-[22px] leading-[28px] sm:text-[26px] sm:leading-[34px] md:text-[28px] md:leading-[36px] text-center'>
          {headingContent}
        </HeadingTag>
        <p className='text-slate-600 text-[14px] leading-[20px] sm:text-[15px] text-center'>
          {subtitle}
        </p>
    </div>
  )
}

export default HeadingComponent