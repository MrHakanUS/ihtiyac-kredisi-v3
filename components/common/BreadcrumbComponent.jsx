import Link from 'next/link';

export default function BreadcrumbComponent({ items, addClass = '' }) {
  return (
    <div className={`mb-[20px] select-none ${addClass}`}>
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link
              href={item.href}
              className='text-slate-600 hover:text-primary transition-colors text-[14px] leading-[18px]'
            >
              {item.label}
            </Link>
          ) : (
            <span className='text-slate-900 font-medium text-[14px] leading-[18px]'>
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <span className='text-slate-400 mx-2'>/</span>
          )}
        </span>
      ))}
    </div>
  );
}
