'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { forgotPasswordSchema, resetPasswordSchema } from '@/lib/validations/auth';
import { formatPhone } from '@/lib/utils/phone';
import toast from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import OTPInput from './OTPInput';
import { sendOtpAction, verifyOtpAction } from '@/app/actions/auth-sms';
import { resetPasswordAction } from '@/app/actions/auth-reset';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordForm() {
  const [step, setStep] = useState(1); // 1: phone, 2: otp, 3: reset password
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const router = useRouter();

  const schema = step === 1
    ? forgotPasswordSchema
    : step === 2
      ? z.object({ phone: forgotPasswordSchema.shape.phone })
      : resetPasswordSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const phoneValue = watch('phone');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    if (phoneToFormat.length <= 10) {
      const formatted = formatPhone(phoneToFormat);
      setValue('phone', formatted);
    }
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

  // Step 1: Send OTP
  const onSendOTP = async (data) => {
    setIsLoading(true);
    try {
      const result = await sendOtpAction(data.phone);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      setPhone(data.phone); // Store raw or formatted phone
      setResendTimer(60); // Start 60 second timer
      toast.success(result.message);
      setStep(2);
    } catch (error) {
      console.error('Send OTP error:', error);
      toast.error('OTP gönderilirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP handler
  const handleResendOTP = async () => {
    if (resendTimer > 0) return;

    setIsLoading(true);
    try {
      const result = await sendOtpAction(phone);
      if (result.success) {
        setResendTimer(60); // Reset timer to 60 seconds
        setOtp(''); // Clear OTP input
        toast.success('Yeni doğrulama kodu gönderildi');
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Resend OTP error:', error);
      toast.error('Kod gönderilirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP
  const onVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast.error('Lütfen 6 haneli OTP kodunu giriniz');
      return;
    }

    setIsLoading(true);
    try {
      const result = await verifyOtpAction(otp, phone);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      setStep(3);
    } catch (error) {
      console.error('Verify OTP error:', error);
      toast.error('OTP doğrulanırken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3: Reset Password
  const onResetPassword = async (data) => {
    setIsLoading(true);
    try {
      const result = await resetPasswordAction({
        phone: phone,
        code: otp,
        password: data.password
      });

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      router.push('/giris-yap');
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error('Şifre sıfırlanırken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  if (step === 1) {
    return (
      <form onSubmit={handleSubmit(onSendOTP)} className="space-y-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Telefon Numarası
          </label>
          <input
            id="phone"
            type="text"
            {...register('phone')}
            onChange={handlePhoneChange}
            value={phoneValue || ''}
            placeholder="5XX XXX XX XX"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Gönderiliyor...' : 'Sıfırlama Kodu Gönder'}
        </button>

        <p className="text-sm text-center text-slate-600">
          <a href="/giris-yap" className="text-primary hover:text-primary/80 font-medium">
            Giriş sayfasına dön
          </a>
        </p>
      </form>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-slate-600 text-center mb-4">
            <span className="font-medium">{formatPhone(phone)}</span> numarasına gönderilen doğrulama kodunu giriniz
          </p>
          <OTPInput value={otp} onChange={setOtp} disabled={isLoading} />
        </div>

        <button
          onClick={onVerifyOTP}
          disabled={isLoading || otp.length !== 6}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Doğrulanıyor...' : 'Doğrula'}
        </button>

        <div className="text-center space-y-2">
          <button
            type="button"
            onClick={() => {
              setStep(1);
              setResendTimer(0);
              setOtp('');
            }}
            className="text-sm text-slate-600 hover:text-slate-800"
          >
            Telefon numarasını değiştir
          </button>
          <p className="text-sm text-slate-600">
            Kod gelmedi mi?{' '}
            {resendTimer > 0 ? (
              <span className="text-primary font-medium">
                {resendTimer} saniye sonra tekrar gönder
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={isLoading}
                className="text-primary hover:text-primary/80 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Tekrar gönder
              </button>
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onResetPassword)} className="space-y-6">
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
          Yeni Şifre
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="En az 6 karakter"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
          Yeni Şifre Tekrar
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            {...register('confirmPassword')}
            placeholder="Şifrenizi tekrar giriniz"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all pr-12"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
          >
            {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>

      <input type="hidden" {...register('phone')} value={phone} />
      <input type="hidden" {...register('code')} value={otp} />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? 'Sıfırlanıyor...' : 'Şifreyi Sıfırla'}
      </button>
    </form>
  );
}

