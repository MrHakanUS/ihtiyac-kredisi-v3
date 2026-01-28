'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { registerSchema } from '@/lib/validations/auth';
import { formatPhone } from '@/lib/utils/phone';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { register as registerUser } from '@/app/api/web/services';
import ModalComponent from '@/components/common/ModalComponent';
import OTPInput from './OTPInput';
import { sendOtpAction, verifyOtpAction } from '@/app/actions/auth-sms';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // OTP States
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [formattedPhone, setFormattedPhone] = useState('');
  const [pendingFormData, setPendingFormData] = useState(null);
  const [resendTimer, setResendTimer] = useState(0);

  const [focusedField, setFocusedField] = useState(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const phoneValue = watch('phone');

  // Auto focus firstName input on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (firstNameInputRef.current) {
        firstNameInputRef.current.focus();
        setFocusedField('firstName');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Format phone as user types
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
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

    // Limit to max 10 digits
    if (phoneToFormat.length > 10) {
      phoneToFormat = phoneToFormat.slice(0, 10);
    }

    const formatted = formatPhone(phoneToFormat);
    setValue('phone', formatted);
  };

  // OTP Timer countdown
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Store data and start OTP flow
    setPendingFormData(data);
    setFormattedPhone(data.phone);

    try {
      const result = await sendOtpAction(data.phone);
      if (result.success) {
        setResendTimer(60); // Start 60 second timer
        toast.success(result.message);
        setShowOtpModal(true);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('OTP Send Error:', error);
      toast.error('Kod gönderilirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const verifyAndRegister = async () => {
    if (!otpCode || otpCode.length !== 6) return;

    setIsLoading(true);
    try {
      // 1. Verify OTP
      const verifyResult = await verifyOtpAction(otpCode, pendingFormData.phone);

      if (!verifyResult.success) {
        toast.error(verifyResult.message);
        setIsLoading(false);
        return;
      }

      // 2. Register User
      const result = await registerUser({
        phone: pendingFormData.phone,
        password: pendingFormData.password,
        confirmPassword: pendingFormData.confirmPassword,
        email: '', // Email removed from form
        firstName: pendingFormData.firstName,
        lastName: pendingFormData.lastName,
        terms: pendingFormData.terms,
      });

      toast.success(result.message || 'Kayıt başarılı! Giriş yapabilirsiniz.');
      router.push('/giris-yap');

    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.message || 'Kayıt işleminde hata oluştu');
      // Do not close modal on error unless it's a fatal registration error, 
      // buy typically if OTP was verified but registration failed (e.g. user exists), we should probably close modal?
      // If user already exists, 'registerUser' throws.
      // We can close modal to let user change phone number.
      setShowOtpModal(false);
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    if (!pendingFormData?.phone || resendTimer > 0) return;
    setIsLoading(true);
    try {
      const result = await sendOtpAction(pendingFormData.phone);
      if (result.success) {
        setResendTimer(60); // Reset timer to 60 seconds
        setOtpCode(''); // Clear input
        toast.success('Yeni doğrulama kodu gönderildi');
      } else {
        toast.error(result.message);
      }
    } catch (e) {
      console.error('Resend OTP error:', e);
      toast.error('Kod gönderilirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const firstNameRegister = register('firstName');
  const lastNameRegister = register('lastName');
  // const emailRegister = register('email'); // Removed
  const phoneRegister = register('phone');
  const passwordRegister = register('password');
  const confirmPasswordRegister = register('confirmPassword');

  return (
    <div className="flex flex-col gap-2 items-start w-full px-4 md:px-10 py-8 md:py-0">
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
            Kayıt Ol
          </span>
        </div>
        <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] md:text-[28px] text-[color:var(--slate-900,#0f172b)]">
          Ücretsiz Kayıt Ol
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 md:gap-8 w-full">
        {/* Form Fields */}
        <div className="flex flex-col gap-3 w-full">
          {/* First Name & Last Name */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 w-full">
              {/* First Name */}
              <div className="flex-1">
                <label className="block mb-2 font-['DM_Sans',sans-serif] font-medium text-[14px] text-[color:var(--slate-900,#0f172b)]">
                  Adınız <span className="text-red-500">*</span>
                </label>
                <div
                  className={`bg-white border-[1.5px] border-solid content-stretch flex h-[52px] items-center px-4 md:px-5 rounded-[16px] w-full transition-colors ${errors.firstName
                    ? 'border-red-500'
                    : focusedField === 'firstName'
                      ? 'border-[color:var(--slate-900,#0f172b)]'
                      : 'border-transparent'
                    }`}
                >
                  <input
                    {...firstNameRegister}
                    ref={(e) => {
                      firstNameRegister.ref(e);
                      firstNameInputRef.current = e;
                    }}
                    type="text"
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={(e) => {
                      firstNameRegister.onBlur(e);
                      setFocusedField(null);
                    }}
                    placeholder="Adınız"
                    className="flex-1 font-['DM_Sans',sans-serif] font-normal text-[14px] md:text-[15px] text-[color:var(--slate-600,#45556c)] bg-transparent outline-none placeholder:text-[color:var(--slate-600,#45556c)]"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-xs md:text-sm text-red-600 mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex-1">
                <label className="block mb-2 font-['DM_Sans',sans-serif] font-medium text-[14px] text-[color:var(--slate-900,#0f172b)]">
                  Soyadınız <span className="text-red-500">*</span>
                </label>
                <div
                  className={`bg-white border-[1.5px] border-solid content-stretch flex h-[52px] items-center px-4 md:px-5 rounded-[16px] w-full transition-colors ${errors.lastName
                    ? 'border-red-500'
                    : focusedField === 'lastName'
                      ? 'border-[color:var(--slate-900,#0f172b)]'
                      : 'border-transparent'
                    }`}
                >
                  <input
                    {...lastNameRegister}
                    ref={(e) => {
                      lastNameRegister.ref(e);
                      lastNameInputRef.current = e;
                    }}
                    type="text"
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={(e) => {
                      lastNameRegister.onBlur(e);
                      setFocusedField(null);
                    }}
                    placeholder="Soyadınız"
                    className="flex-1 font-['DM_Sans',sans-serif] font-normal text-[14px] md:text-[15px] text-[color:var(--slate-600,#45556c)] bg-transparent outline-none placeholder:text-[color:var(--slate-600,#45556c)]"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-xs md:text-sm text-red-600 mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2 w-full">
            <label className="block mb-2 font-['DM_Sans',sans-serif] font-medium text-[14px] text-[color:var(--slate-900,#0f172b)]">
              Telefon Numarası <span className="text-red-500">*</span>
            </label>
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
                  placeholder="5XX XXX XX XX"
                  className="flex-1 font-['DM_Sans',sans-serif] font-normal text-[14px] md:text-[15px] text-[color:var(--slate-600,#45556c)] bg-transparent outline-none placeholder:text-[color:var(--slate-600,#45556c)]"
                />
                <FiPhone className="shrink-0 w-[18px] h-[18px] md:w-[21px] md:h-[21px] text-[color:var(--slate-900,#0f172b)]" />
              </div>
            </div>
            {errors.phone && (
              <p className="text-xs md:text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 w-full">
            <label className="block mb-2 font-['DM_Sans',sans-serif] font-medium text-[14px] text-[color:var(--slate-900,#0f172b)]">
              Şifre <span className="text-red-500">*</span>
            </label>
            <div
              className={`bg-white content-stretch flex gap-4 h-[52px] items-center px-4 md:px-5 rounded-[16px] w-full border-[1.5px] border-solid transition-colors ${errors.password
                ? 'border-red-500'
                : focusedField === 'password'
                  ? 'border-[color:var(--slate-900,#0f172b)]'
                  : 'border-transparent'
                }`}
            >
              <input
                {...passwordRegister}
                ref={(e) => {
                  passwordRegister.ref(e);
                  passwordInputRef.current = e;
                }}
                type={showPassword ? 'text' : 'password'}
                onFocus={() => setFocusedField('password')}
                onBlur={(e) => {
                  passwordRegister.onBlur(e);
                  setFocusedField(null);
                }}
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

          {/* Confirm Password */}
          <div className="flex flex-col gap-2 w-full">
            <label className="block mb-2 font-['DM_Sans',sans-serif] font-medium text-[14px] text-[color:var(--slate-900,#0f172b)]">
              Şifre Tekrar <span className="text-red-500">*</span>
            </label>
            <div
              className={`bg-white content-stretch flex gap-4 h-[52px] items-center px-4 md:px-5 rounded-[16px] w-full border-[1.5px] border-solid transition-colors ${errors.confirmPassword
                ? 'border-red-500'
                : focusedField === 'confirmPassword'
                  ? 'border-[color:var(--slate-900,#0f172b)]'
                  : 'border-transparent'
                }`}
            >
              <input
                {...confirmPasswordRegister}
                ref={(e) => {
                  confirmPasswordRegister.ref(e);
                  confirmPasswordInputRef.current = e;
                }}
                type={showConfirmPassword ? 'text' : 'password'}
                onFocus={() => setFocusedField('confirmPassword')}
                onBlur={(e) => {
                  confirmPasswordRegister.onBlur(e);
                  setFocusedField(null);
                }}
                placeholder="Şifreniz (Tekrardan)"
                className="flex-1 font-['DM_Sans',sans-serif] font-normal text-[14px] md:text-[15px] text-[color:var(--slate-600,#45556c)] bg-transparent outline-none placeholder:text-[color:var(--slate-600,#45556c)]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="relative shrink-0 size-[18px] md:size-5 hover:opacity-70 transition-opacity text-[color:var(--slate-600,#45556c)]"
                aria-label={showConfirmPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
              >
                {showConfirmPassword ? (
                  <FiEyeOff className="size-full" />
                ) : (
                  <FiEye className="size-full" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs md:text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex gap-3 items-start w-full">
            <input
              type="checkbox"
              className="ik-checkbox ik-checkbox-sm mt-0.5"
              {...register('terms')}
            />
            <p className="flex-1 font-['DM_Sans',sans-serif] text-[13px] md:text-[14px] text-[color:var(--slate-600,#45556c)] leading-relaxed">
              <span
                className="font-medium text-[color:var(--slate-900,#0f172b)] cursor-pointer hover:underline transition-all"
                onClick={() => setShowTermsModal(true)}
              >
                İhtiyaçkredisi.com Üyelik Sözleşmesi
              </span>
              <span className="font-normal">{' '}'ni okudum ve kabul ediyorum</span>
              <span className="text-red-500 ml-1">*</span>
            </p>
          </div>
          {errors.terms && (
            <p className="text-xs md:text-sm text-red-600 -mt-2">{errors.terms.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[var(--primary,#ff6900)] flex h-[52px] items-center justify-center px-6 rounded-[32px] w-full hover:bg-[#e55a00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span className="font-['DM_Sans',sans-serif] font-bold text-[14px] md:text-[15px] text-white leading-normal">
            {isLoading ? 'İşlem yapılıyor...' : 'Hesap Oluştur'}
          </span>
        </button>

        {/* Login Link */}
        <div className="flex gap-4 items-center justify-center text-[13px] md:text-[14px] w-full">
          <span className="font-['DM_Sans',sans-serif] font-normal text-[color:var(--slate-600,#45556c)]">
            Zaten hesabın var mı?
          </span>
          <Link
            href="/giris-yap"
            className="font-['DM_Sans',sans-serif] font-medium text-[color:var(--slate-900,#0f172b)] hover:text-primary transition-colors"
          >
            Giriş Yap
          </Link>
        </div>
      </form>

      {/* Terms Modal */}
      <ModalComponent
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title="Üyelik Sözleşmesi"
        size="lg"
      >
        <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          <div className="flex flex-col gap-4 text-sm text-slate-600 font-['DM_Sans',sans-serif]">
            <p>
              <strong>1. TARAFLAR</strong>
              <br />
              İşbu Üyelik Sözleşmesi ("Sözleşme"), İhtiyaçkredisi.com ("Şirket") ile www.ihtiyackredisi.com ("Site") adresine üye olan kullanıcı ("Üye") arasında akdedilmiştir.
            </p>
            <p>
              <strong>2. SÖZLEŞMENİN KONUSU</strong>
              <br />
              İşbu Sözleşme'nin konusu, Üye'nin Site'den faydalanma şartlarının belirlenmesidir.
            </p>
            <p>
              <strong>3. TARAFLARIN HAK VE YÜKÜMLÜLÜKLERİ</strong>
              <br />
              3.1. Üye, Site'ye üye olurken verdiği kişisel ve diğer sair bilgilerin kanunlar önünde doğru olduğunu, Şirket'in bu bilgilerin gerçeğe aykırılığı nedeniyle uğrayacağı tüm zararları aynen ve derhal tazmin edeceğini beyan ve taahhüt eder.
              <br />
              3.2. Üye, kendisi tarafından belirlenen şifreyi başka kişi ya da kuruluşlara veremez, üyenin söz konusu şifreyi kullanma hakkı bizzat kendisine aittir. Bu sebeple doğabilecek tüm sorumluluk ile üçüncü kişiler veya yetkili merciler tarafından Şirket'e karşı ileri sürülebilecek tüm iddia ve taleplere karşı, Şirket'in söz konusu izinsiz kullanımdan kaynaklanan her türlü tazminat ve sair talep hakkı saklıdır.
              <br />
              3.3. Üye, Site'yi kullanırken yasal mevzuat hükümlerine riayet etmeyi ve bunları ihlal etmemeyi baştan kabul ve taahhüt eder. Aksi takdirde, doğacak tüm hukuki ve cezai yükümlülükler tamamen ve münhasıran Üye'yi bağlayacaktır.
            </p>
            <p>
              <strong>4. SÖZLEŞMENİN FESHİ</strong>
              <br />
              İşbu sözleşme Üye'nin üyeliğini iptal etmesi veya Şirket tarafından üyeliğinin iptal edilmesine kadar yürürlükte kalacaktır. Şirket, Üye'nin üyelik sözleşmesinin herhangi bir hükmünü ihlal etmesi durumunda üyenin üyeliğini iptal ederek sözleşmeyi tek taraflı olarak feshedebilecektir.
            </p>
            <p>
              <strong>5. YÜRÜRLÜK</strong>
              <br />
              Üyenin, üyelik kaydı yapması, üyelik sözleşmesinde yer alan tüm maddeleri okuduğu ve üyelik sözleşmesinde yer alan maddeleri kabul ettiği anlamına gelir. İşbu Sözleşme üyenin üye olması anında akdedilmiş ve karşılıklı olarak yürürlüğe girmiştir.
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => {
                setValue('terms', true, { shouldValidate: true });
                setShowTermsModal(false);
              }}
              className="px-6 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              Okudum, Anladım
            </button>
          </div>
        </div>
      </ModalComponent>

      {/* OTP Verification Modal */}
      <ModalComponent
        isOpen={showOtpModal}
        onClose={() => !isLoading && setShowOtpModal(false)}
        title="Telefon Doğrulama"
        size="md"
      >
        <div className="flex flex-col gap-6 py-4">
          <div className="text-center space-y-2">
            <p className="text-slate-600">
              <span className="font-semibold text-slate-900">{formattedPhone}</span> numarasına gönderilen 6 haneli doğrulama kodunu giriniz.
            </p>
            <button
              onClick={() => setShowOtpModal(false)}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Numarayı Değiştir
            </button>
          </div>

          <OTPInput
            value={otpCode}
            onChange={setOtpCode}
            length={6}
            disabled={isLoading}
          />

          <button
            onClick={verifyAndRegister}
            disabled={isLoading || otpCode.length !== 6 || !otpCode}
            className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Doğrulanıyor...' : 'Doğrula ve Kayıt Ol'}
          </button>

          <div className="text-center">
            <p className="text-sm text-slate-600">
              Kod gelmedi mi?{' '}
              {resendTimer > 0 ? (
                <span className="text-primary font-medium">
                  {resendTimer} saniye sonra tekrar gönder
                </span>
              ) : (
                <button
                  type="button"
                  onClick={resendOtp}
                  disabled={isLoading}
                  className="text-primary hover:text-primary/80 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Tekrar gönder
                </button>
              )}
            </p>
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}