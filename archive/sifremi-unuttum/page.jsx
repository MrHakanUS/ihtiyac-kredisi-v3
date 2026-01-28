'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import ModalComponent from '@/components/common/ModalComponent';

export default function SifremiUnuttumPage() {
  const [resetMethod, setResetMethod] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPhoneVerificationModal, setShowPhoneVerificationModal] =
    useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const verificationInputRef = useRef(null);
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    if (value.length <= 10) setPhoneNumber(value);
    if (phoneError && value.length >= 10) setPhoneError('');
  };

  const formatPhoneNumber = (value) => {
    if (!value) return '';
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (!match) return value;

    const parts = [];
    if (match[1]) parts.push(match[1]);
    if (match[2]) parts.push(match[2]);
    if (match[3]) parts.push(match[3]);
    if (match[4]) parts.push(match[4]);
    return parts.join(' ');
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (resetMethod === 'phone' && phoneNumber.length < 10) {
      setPhoneError('Lütfen geçerli bir telefon numarası girin');
      return;
    }
    if (resetMethod === 'email' && !email.includes('@')) return;
    if (resetMethod === 'phone') {
      setVerificationCode('');
      setShowPhoneVerificationModal(true);
      setResendTimer(9);
      return;
    }
    setIsSubmitted(true);
  }

  const closeVerificationModal = () => {
    setShowPhoneVerificationModal(false);
    setVerificationCode('');
  };

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  useEffect(() => {
    if (showPhoneVerificationModal) {
      setTimeout(() => {
        verificationInputRef.current?.focus();
      }, 100);
    }
  }, [showPhoneVerificationModal]);

  const handleResendCode = () => {
    if (resendTimer === 0) setResendTimer(9);
  };

  const handleVerificationCodeChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    if (value.length <= 6) setVerificationCode(value);
  };

  const formatVerificationCode = (code) => {
    if (!code) return '';
    if (code.length <= 3) return code;
    return `${code.slice(0, 3)}-${code.slice(3, 6)}`;
  };

  const handleVerifyCode = () => {
    // Doğrulama akışı burada uygulanabilir
    // Başarılı olduğunda modal kapatılabilir
    // setShowPhoneVerificationModal(false)
  };

  return (
    <div className='flex items-center justify-center px-4 pt-8 md:pt-[56px]'>
      <div className='custom-container-1'>
        <div className='rounded-2xl overflow-hidden border border-slate-100'>
          <div className='flex flex-col-reverse md:flex-row items-stretch md:items-center justify-between gap-y-10 md:gap-y-0 md:gap-x-[80px]'>
            <div className='w-full md:w-1/2 bg-slate-200 rounded-2xl md:rounded-[32px] flex items-center justify-center p-6 sm:p-8 md:p-12 min-h-[200px] sm:min-h-[280px] md:min-h-[588px] relative overflow-hidden'>
              <div className='text-center relative z-10'>
                <div className='text-slate-500 text-xl sm:text-2xl font-semibold mb-3'>
                  Reklam Alanı
                </div>
                <div className='text-slate-400 text-base sm:text-lg'>560 × 588px</div>
              </div>
            </div>

            <div className='w-full md:w-1/2 p-0 flex flex-col justify-center md:min-h-[588px]'>
              <BreadcrumbComponent
                items={[
                  { label: 'İhtiyaçkredisi.com', href: '/' },
                  { label: 'Şifremi Unuttum' },
                ]}
              />

              <h1 className='text-2xl leading-7 sm:text-[28px] sm:leading-[36px] font-semibold text-slate-900 mb-[32px] sm:mb-[40px] md:mb-[48px]'>
                Şifrenizi Sıfırlayın
              </h1>

              <div className='flex mb-[24px] bg-slate-100 border border-slate-200 rounded-[16px] select-none'>
                <button
                  onClick={() => setResetMethod('phone')}
                  className={`cursor-pointer flex-1 py-3 px-4 rounded-[16px] transition-all duration-200 font-medium text-[15px] leading-[20px] ${
                    resetMethod === 'phone'
                      ? 'bg-white text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Telefon ile
                </button>
                <button
                  onClick={() => setResetMethod('email')}
                  className={`cursor-pointer flex-1 py-3 px-4 rounded-[16px] transition-all duration-200 font-medium text-[15px] leading-[20px] ${
                    resetMethod === 'email'
                      ? 'bg-white text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  E-Posta ile
                </button>
              </div>

              <form onSubmit={handleSubmit} className='space-y-[8px]'>
                {resetMethod === 'phone' ? (
                  <div>
                    <div className='relative'>
                      <div className='absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-900 font-semibold text-base md:text-lg select-none'>
                        +90
                      </div>
                      <input
                        type='tel'
                        value={formatPhoneNumber(phoneNumber)}
                        onChange={handlePhoneChange}
                        placeholder='555 123 99 00'
                        className={`w-full pl-[52px] md:pl-[60px] pr-4 py-3 md:py-4 text-base md:text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary transition-all placeholder:text-slate-400 bg-white ${
                          phoneError
                            ? 'border-red-500 focus:border-red-500'
                            : ''
                        }`}
                      />
                    </div>
                    {phoneError ? (
                      <div className='mt-2 text-[14px] leading-[18px] text-red-500'>
                        {phoneError}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='ornek@email.com'
                      className='w-full px-4 py-3 md:py-4 text-base md:text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary transition-all placeholder:text-slate-400 bg-white'
                    />
                  </div>
                )}

                {isSubmitted ? (
                  <div className='mt-2 text-[14px] leading-[18px] text-slate-600'>
                    Eğer hesabınız varsa,{' '}
                    {resetMethod === 'email'
                      ? 'sıfırlama bağlantısı'
                      : 'doğrulama kodu'}{' '}
                    gönderildi.
                  </div>
                ) : null}

                <button
                  type='submit'
                  className='w-full bg-primary hover:brightness-125 text-white font-bold py-[8px] px-[24px] rounded-full transition-all duration-300 text-[15px] leading-[20px] tracking-wider cursor-pointer min-h-[48px] md:min-h-[52px] my-6 md:my-[32px]'
                >
                  {resetMethod === 'email'
                    ? 'Sıfırlama Bağlantısı Gönder'
                    : 'Doğrulama Kodu Gönder'}
                </button>

                <div className='text-center text-base md:text-xl pt-4 flex flex-wrap items-center gap-3 md:gap-[16px] justify-center'>
                  <span className='text-slate-600'>
                    Hatırladınız mı?
                  </span>
                  <Link
                    href='/giris'
                    className='text-slate-900 font-semibold hover:text-primary transition-colors duration-300'
                  >
                    Giriş Yapın
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ModalComponent
        isOpen={showPhoneVerificationModal}
        onClose={closeVerificationModal}
        size='md'
        showCloseButton={true}
        closeOnOutsideClick={true}
        closeOnEsc={true}
      >
        <h2 className='text-[24px] leading-[32px] font-semibold text-slate-900 mb-[32px]'>
          Telefon Numaranıza Doğrulama Kodu Gönderdik
        </h2>

        <div className='mb-4'>
          <input
            ref={verificationInputRef}
            type='text'
            value={formatVerificationCode(verificationCode)}
            onChange={handleVerificationCodeChange}
            placeholder='000-000'
            className='w-full px-4 py-4 text-lg text-center border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary transition-all placeholder:text-slate-400 bg-white tracking-wider font-mono'
            maxLength='7'
            autoComplete='off'
          />
        </div>

        <div className='text-center mb-8'>
          {resendTimer > 0 ? (
            <span className='text-slate-500'>
              {resendTimer} Saniye sonra{' '}
              <span className='text-slate-900 font-medium cursor-not-allowed'>
                Tekrar Kod Gönder
              </span>
            </span>
          ) : (
            <button
              onClick={handleResendCode}
              className='text-slate-900 font-medium cursor-pointer hover:text-primary transition-colors duration-300'
            >
              Tekrar Kod Gönder
            </button>
          )}
        </div>

        <button
          onClick={handleVerifyCode}
          className='w-full bg-primary hover:brightness-125 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 text-lg cursor-pointer'
        >
          Doğrula
        </button>
      </ModalComponent>
    </div>
  );
}
