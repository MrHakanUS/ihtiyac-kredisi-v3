import LogoComponent from '@/components/common/LogoComponent';
import React from 'react';
import Link from 'next/link';

const AuthHeaderComponent = () => {
  return (
    <>
      {/* Top Advertisement Bar */}
      <aside className="bg-[var(--secondary,#2b7fff)] h-[56px] w-full flex items-center justify-center">
        <p className="font-['DM_Sans',sans-serif] font-bold text-[14px] md:text-[16px] text-white leading-[0]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Reklam Alanı
        </p>
      </aside>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--slate-50,#f8fafc)] border-b border-[var(--slate-200,#e2e8f0)]">
        <div className="custom-container-1 flex h-[72px] items-center justify-between px-4 md:px-[120px] py-0">
          <Link
            href="/"
            className="flex items-center gap-3 md:gap-5"
          >
            <div className="flex flex-col items-end leading-[0] pb-[2px] pt-0 px-0 whitespace-nowrap">
              <div className="flex flex-col justify-center mb-[-2px] not-italic relative text-[0px] text-[color:var(--slate-900,#0f172b)]">
                <p className="font-['DM_Sans',sans-serif] font-bold leading-[normal] text-[20px] md:text-[24px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <span className="text-[#193cb8]">ihtiyac</span>
                  <span className="text-[#2b7fff]">kredisi</span>
                </p>
              </div>
              <div className="flex flex-col font-['DM_Sans',sans-serif] font-extrabold justify-center mb-[-2px] relative text-[12px] md:text-[14px] text-[color:var(--slate-500,#62748e)]" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[normal]">.com</p>
              </div>
            </div>
            <div className="hidden md:block h-[40px] w-[2px] bg-[var(--primary,#ff6900)] shrink-0"></div>
            <div className="hidden md:block font-['DM_Sans',sans-serif] font-normal leading-[normal] relative text-[15px] text-[color:var(--slate-900,#0f172b)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="mb-0">En Uygun</p>
              <p>Kredi Hesaplama</p>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default AuthHeaderComponent;