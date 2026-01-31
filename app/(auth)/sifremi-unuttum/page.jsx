import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: 'Şifremi Unuttum | İhtiyaç Kredisi',
    description: 'Şifrenizi sıfırlayın',
  };
}

export default function SifremiUnuttumPage() {
  return (
    <div className="relative w-full min-h-[calc(100vh-128px)] overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-128px)] py-4 px-4" style={{ paddingBottom: '0' }}>
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

          {/* Right Side - Form */}
          <div className="w-full lg:max-w-[560px] lg:w-full">
            <div className="flex flex-col gap-2 items-start w-full px-4 md:px-10 py-8 md:py-0">
              {/* Breadcrumb & Header */}
              <div className="flex flex-col gap-4 md:gap-5 items-start text-center w-full">
                <div className="flex gap-1 md:gap-[4px] items-center text-[13px] md:text-[14px]">
                  <Link href="/" className="font-['DM_Sans',sans-serif] font-normal text-[color:var(--slate-600,#45556c)] hover:text-slate-900 transition-colors">İhtiyaçkredisi.com</Link>
                  <span className="font-['DM_Sans',sans-serif] font-normal text-[color:var(--slate-600,#45556c)]">/</span>
                  <span className="font-['DM_Sans',sans-serif] font-medium text-[color:var(--slate-900,#0f172b)]">Şifremi Unuttum</span>
                </div>
                <div className="flex flex-col gap-2 w-full text-start">
                  <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] md:text-[28px] text-[color:var(--slate-900,#0f172b)]">
                    Şifrenizi Sıfırlayın
                  </h1>
                  <p className="font-['DM_Sans',sans-serif] text-slate-600 text-sm md:text-base">
                    Şifrenizi sıfırlamak için telefon numaranıza sıfırlama kodu göndereceğiz
                  </p>
                </div>
              </div>

              {/* The Form Component */}
              <div className="w-full">
                <ForgotPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
