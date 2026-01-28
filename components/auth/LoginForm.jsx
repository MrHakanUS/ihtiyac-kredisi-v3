'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { loginSchema } from '@/lib/validations/auth';
import { formatPhone } from '@/lib/utils/phone';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { login } from '@/app/api/web/services';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null); // 'phone' or 'password' or null
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const phoneInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const phoneValue = watch('phone');
  const phoneRegister = register('phone');

  // Auto focus phone input on mount
  useEffect(() => {
    // Use setTimeout to ensure the input is fully rendered
    const timer = setTimeout(() => {
      if (phoneInputRef.current) {
        phoneInputRef.current.focus();
        setFocusedField('phone');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Format phone as user types
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    // Remove country code if present for formatting
    let phoneToFormat = value;
    if (value.startsWith('90') && value.length > 2) {
      phoneToFormat = value.slice(2);
    } else if (value.startsWith('0')) {
      phoneToFormat = value.slice(1);
    }

    // Strict check: Must start with 5
    if (phoneToFormat.length > 0 && !phoneToFormat.startsWith('5')) {
      return; // Do not update state if it doesn't start with 5
    }

    if (phoneToFormat.length <= 10) {
      const formatted = formatPhone(phoneToFormat);
      setValue('phone', formatted);
    }
  };

  // Handle redirect after successful login
  useEffect(() => {
    if (loginSuccess && session?.user) {
      const userRole = session.user.role;

      setIsLoading(false);

      // Get callbackUrl from query params
      const callbackUrl = searchParams?.get('callbackUrl');

      // Determine redirect destination
      let redirectPath = '/ana-sayfa'; // Default - everyone goes to ana-sayfa first

      if (callbackUrl) {
        // Use callbackUrl if provided and it's a valid internal path
        try {
          const url = new URL(callbackUrl, window.location.origin);
          if (url.origin === window.location.origin) {
            redirectPath = url.pathname + url.search;
          }
        } catch (e) {
          // Invalid URL, use default
          console.error('Invalid callbackUrl:', e);
        }
      }

      router.push(redirectPath);
      router.refresh();
      setLoginSuccess(false);
    }
  }, [loginSuccess, session, router, searchParams]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const result = await login({
        phone: data.phone,
        password: data.password,
        rememberMe: rememberMe,
      });

      toast.success(result.message || 'Giriş başarılı');

      // Set flag to trigger redirect after session updates
      // NextAuth will automatically update the session after successful login
      setLoginSuccess(true);
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Giriş yapılırken bir hata oluştu');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 md:gap-[48px] items-start w-full px-4 md:px-10 py-8 md:py-0">
      {/* Slogan - Top Section */}
      <div className="w-full flex flex-col gap-2 items-center mb-2">
        <div className="relative flex items-center gap-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[var(--primary,#ff6900)]"></div>
          <p className="font-['DM_Sans',sans-serif] font-medium text-[14px] md:text-[16px] text-[color:var(--slate-600,#45556c)] uppercase tracking-[0.15em]">
          Türkiye’nin Kredi Karar Altyapısı
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[var(--accent,#2b7fff)]"></div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex flex-col gap-4 md:gap-5 items-start text-center w-full">
        <div className="flex gap-1 md:gap-[4px] items-center text-[13px] md:text-[14px]">
          <Link
            href="/"
            className="font-['DM_Sans',sans-serif] font-normal text-[color:var(--slate-600,#45556c)] hover:text-slate-900 transition-colors"
          >
            İhtiyaçkredisi.com
          </Link>
          <span className="font-['DM_Sans',sans-serif] font-normal text-[color:var(--slate-600,#45556c)]">/</span>
          <span className="font-['DM_Sans',sans-serif] font-medium text-[color:var(--slate-900,#0f172b)]">
            Giriş Yap
          </span>
        </div>
        <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] md:text-[28px] text-[color:var(--slate-900,#0f172b)]">
          Hesabınıza Giriş Yapın
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 md:gap-8 w-full">
        {/* Form Fields */}
        <div className="flex flex-col gap-4 md:gap-6 w-full">
          {/* Phone Input */}
          <div className="flex flex-col gap-2 w-full">
            <div
              className={`bg-white border-[1.5px] border-solid content-stretch flex h-[52px] items-center px-4 md:px-5 rounded-[16px] w-full transition-colors ${errors.phone
                ? 'border-red-500'
                : focusedField === 'phone'
                  ? 'border-[color:var(--slate-900,#0f172b)]'
                  : 'border-transparent'
                }`}
            >
              <div className="flex-1 flex gap-1 md:gap-[4px] items-center">
                <input
                  {...phoneRegister}
                  ref={(e) => {
                    phoneRegister.ref(e);
                    phoneInputRef.current = e;
                  }}
                  type="text"
                  onChange={(e) => {
                    phoneRegister.onChange(e);
                    handlePhoneChange(e);
                  }}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={(e) => {
                    phoneRegister.onBlur(e);
                    setFocusedField(null);
                  }}
                  value={phoneValue || ''}
                  placeholder="+90 555 555 55 55"
                  className="flex-1 font-['DM_Sans',sans-serif] font-medium text-[14px] md:text-[15px] text-[color:var(--slate-900,#0f172b)] bg-transparent outline-none placeholder:text-slate-400"
                />
                <FiPhone className="shrink-0 w-[18px] h-[18px] md:w-[21px] md:h-[21px] text-[color:var(--slate-900,#0f172b)]" />
              </div>
            </div>
            {errors.phone && (
              <p className="text-xs md:text-sm text-red-600">
                {errors.phone?.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2 w-full">
            <div
              className={`bg-white content-stretch flex gap-4 h-[52px] items-center px-4 md:px-5 rounded-[16px] w-full border-[1.5px] border-solid transition-colors ${errors.password
                ? 'border-red-500'
                : focusedField === 'password'
                  ? 'border-[color:var(--slate-900,#0f172b)]'
                  : 'border-transparent'
                }`}
            >
              <input
                ref={passwordInputRef}
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                placeholder="Şifreniz"
                className="flex-1 font-['DM_Sans',sans-serif] font-normal text-[14px] md:text-[15px] text-[color:var(--slate-600,#45556c)] bg-transparent outline-none placeholder:text-[color:var(--slate-600,#45556c)]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="relative shrink-0 size-[18px] md:size-5 hover:opacity-70 transition-opacity text-[color:var(--slate-600,#45556c)]"
                aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
              >
                {showPassword ? (
                  <FiEyeOff className="size-full" />
                ) : (
                  <FiEye className="size-full" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs md:text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center w-full">
            <label className="flex-1 flex gap-2 md:gap-3 items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="ik-checkbox ik-checkbox-sm"
              />
              <span className="font-['DM_Sans',sans-serif] font-normal text-[13px] md:text-[14px] text-[color:var(--slate-600,#45556c)]">
                Beni hatırla
              </span>
            </label>
            <Link
              href="/sifremi-unuttum"
              className="font-['DM_Sans',sans-serif] font-normal text-[13px] md:text-[14px] text-[color:var(--slate-600,#45556c)] text-center hover:text-slate-900 transition-colors"
            >
              Şifremi Unuttum
            </Link>
          </div>

          {/* Cookie & Marketing Consent Info */}
          <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-4 w-full">
            <div className="flex flex-col gap-3">
              <p className="font-['DM_Sans',sans-serif] font-normal text-[12px] md:text-[13px] text-[color:var(--slate-600,#45556c)] leading-relaxed">
                Giriş yaparak,{' '}
                <Link 
                  href="/yasal/cerez-acik-riza-metni" 
                  className="text-[color:var(--primary,#ff6900)] hover:underline"
                  target="_blank"
                >
                  çerez politikamızı
                </Link>
                {' '}ve{' '}
                <Link 
                  href="/yasal/kisisel-verilerin-korunmasi" 
                  className="text-[color:var(--primary,#ff6900)] hover:underline"
                  target="_blank"
                >
                  kişisel verilerin korunması
                </Link>
                {' '}hakkındaki bilgilendirmeyi kabul etmiş olursunuz.
              </p>
              <div className="flex items-start gap-2">
                <button
                  type="button"
                  onClick={() => { 
                     if (typeof window !== 'undefined' && window.showCookiePreferences) {
                       window.showCookiePreferences();
                    }
                  }}
                  className="font-['DM_Sans',sans-serif] font-medium text-[12px] md:text-[13px] text-[color:var(--primary,#ff6900)] hover:text-[#e55a00] transition-colors underline"
                >
                  Çerez tercihlerini yönet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[var(--primary,#ff6900)] flex h-[52px] items-center justify-center px-6 rounded-[32px] w-full hover:bg-[#e55a00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span className="font-['DM_Sans',sans-serif] font-bold text-[14px] md:text-[15px] text-white leading-normal">
            {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </span>
        </button>

        {/* Sign Up Link */}
        <div className="flex gap-2 items-center justify-center text-[13px] md:text-[14px] w-full">
          <span className="font-['DM_Sans',sans-serif] font-normal text-[color:var(--slate-600,#45556c)]">
            Hesabın yok mu?
          </span>
          <Link
            href="/uye-ol"
            className="font-['DM_Sans',sans-serif] font-semibold text-[color:var(--primary,#ff6900)] hover:text-[#e55a00] transition-colors relative"
          >
            Hesap Oluşturun
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--primary,#ff6900)] transition-all duration-300 hover:w-full"></span>
          </Link>
        </div>
      </form>
    </div>
  );
}