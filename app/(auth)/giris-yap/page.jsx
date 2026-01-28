import { Suspense } from 'react';
import LoginForm from '@/components/auth/LoginForm';

export async function generateMetadata() {
  return {
    title: 'Giriş Yap | İhtiyaç Kredisi',
    description: 'Hesabınıza giriş yapın',
  };
}

export default function GirisYapPage() {
  return (
    <div className="relative w-full min-h-[calc(100vh-128px)] overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-128px)] py-12 lg:py-[64px] px-4 lg:px-[120px]" style={{ paddingBottom: '0' }}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px] items-start justify-center max-w-[1280px] w-full">
          {/* Left Side - Advertisement Area */}
          <div className="hidden lg:flex flex-col gap-4 items-center justify-center bg-[var(--slate-200,#e2e8f0)] rounded-[32px] w-[560px] h-[588px] shrink-0">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] text-[color:var(--slate-900,#0f172b)] text-center">
              Reklam Alanı
            </p>
            <p className="font-['Inter',sans-serif] font-semibold text-[18px] text-[color:var(--slate-900,#0f172b)]">
              560 * 588px
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full lg:max-w-[560px] lg:w-full">
            <Suspense fallback={
              <div className="flex flex-col gap-8 md:gap-[48px] items-start w-full px-4 md:px-10 py-8 md:py-0">
                <div className="flex flex-col gap-4 md:gap-5 items-start text-center w-full">
                  <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] md:text-[28px] text-[color:var(--slate-900,#0f172b)]">
                    Hesabınıza Giriş Yapın
                  </h1>
                </div>
              </div>
            }>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}