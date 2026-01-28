import React from 'react'

export default function BlogLoading() {
  return (
    <div className='custom-container-1 py-8 px-4'>
      <div className='flex flex-col gap-y-[24px]'>
        {/* Hero Skeleton */}
        <div className='mb-[32px]'>
          <div className='max-w-[1200px] w-full mx-auto'>
            <div className='h-[40px] bg-slate-200 animate-pulse rounded-[8px] w-[200px]' />
          </div>
        </div>

        {/* Filters Skeleton */}
        <div className='max-w-[1200px] w-full mx-auto'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-[12px]'>
            <div className='flex flex-wrap gap-[8px]'>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className='h-[32px] bg-slate-200 animate-pulse rounded-[999px] w-[80px]'
                />
              ))}
            </div>
            <div className='sm:ml-auto w-full sm:w-[360px]'>
              <div className='h-[40px] bg-slate-200 animate-pulse rounded-[12px]' />
            </div>
          </div>
        </div>

        {/* Blog Cards Skeleton */}
        <section className='max-w-[1200px] w-full mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]'>
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className='bg-white border border-slate-200 rounded-[16px] p-[16px] h-[200px]'
              >
                <div className='space-y-3'>
                  <div className='h-4 bg-slate-200 animate-pulse rounded w-3/4' />
                  <div className='h-4 bg-slate-200 animate-pulse rounded w-1/2' />
                  <div className='space-y-2'>
                    <div className='h-3 bg-slate-200 animate-pulse rounded' />
                    <div className='h-3 bg-slate-200 animate-pulse rounded w-5/6' />
                    <div className='h-3 bg-slate-200 animate-pulse rounded w-4/6' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination Skeleton */}
        <div className='max-w-[1200px] w-full mx-auto'>
          <div className='flex items-center justify-center gap-[8px] pt-[16px]'>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className='h-[32px] w-[32px] bg-slate-200 animate-pulse rounded-[8px]'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
