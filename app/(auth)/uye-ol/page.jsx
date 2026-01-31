import RegisterForm from '@/components/auth/RegisterForm';

export async function generateMetadata() {
  return {
    title: 'Kayıt Ol | İhtiyaç Kredisi',
    description: 'Ücretsiz kayıt ol',
  };
}

export default function UyeOlPage() {
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

          {/* Right Side - Register Form */}
          <div className="w-full lg:max-w-[560px] lg:w-full">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}