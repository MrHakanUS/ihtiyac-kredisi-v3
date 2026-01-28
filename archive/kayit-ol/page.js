'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import ModalComponent from '@/components/common/ModalComponent';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';

export default function KayitOlPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPhoneVerificationModal, setShowPhoneVerificationModal] =
    useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const verificationInputRef = useRef(null);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    if (value.length <= 10) setPhoneNumber(value);
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

  // Geri sayım timer'ı için useEffect
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Modal'ı kapatma fonksiyonu
  const closeVerificationModal = () => {
    setShowPhoneVerificationModal(false);
    setVerificationCode(''); // Kodu temizle
  };

  // Modal açıldığında input'a focus
  useEffect(() => {
    if (showPhoneVerificationModal) {
      // Input'a focus ver
      setTimeout(() => {
        verificationInputRef.current?.focus();
      }, 100);
    }
  }, [showPhoneVerificationModal]);

  // Hesap oluştur butonuna tıklandığında
  const handleSubmit = (e) => {
    e.preventDefault();
    // Herhangi bir doğrulama yapmadan modal'ı aç
    setVerificationCode(''); // Önceki kodu temizle
    setShowPhoneVerificationModal(true);
    setResendTimer(9); // 9 saniye geri sayım başlat
  };

  // Tekrar kod gönder
  const handleResendCode = () => {
    if (resendTimer === 0) {
      setResendTimer(9); // Yeniden 9 saniye başlat
      // Burada kod gönderme işlemi yapılabilir
    }
  };

  // Doğrulama kodu inputu için format ve kontrol
  const handleVerificationCodeChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ''); // Sadece rakamları al
    if (value.length <= 6) {
      setVerificationCode(value);
    }
  };

  // Görsel format için kodu ayır (123-456 formatında göster)
  const formatVerificationCode = (code) => {
    if (!code) return '';
    if (code.length <= 3) return code;
    return `${code.slice(0, 3)}-${code.slice(3, 6)}`;
  };

  // Doğrulama kodunu kontrol et
  const handleVerifyCode = () => {
    // Burada doğrulama işlemi yapılabilir 
    // Başarılı olduğunda modal'ı kapat
    // setShowPhoneVerificationModal(false);
  };

  return (
    <div className='flex items-center justify-center px-4'>
      <div className='custom-container-1'>
        <div className='rounded-2xl overflow-hidden border border-slate-100 pt-8 md:pt-[56px]'>
          <div className='flex flex-col-reverse md:flex-row items-stretch md:items-center justify-between gap-y-10 md:gap-y-0 md:gap-x-[80px]'>
            {/* Sol taraf - Reklam */}
            <div className='w-full md:w-1/2 bg-slate-200 rounded-2xl md:rounded-[32px] flex items-center justify-center p-6 sm:p-8 md:p-12 min-h-[200px] sm:min-h-[280px] md:min-h-[588px] relative overflow-hidden'>
              <div className='text-center relative z-10'>
                <div className='text-slate-500 text-xl sm:text-2xl font-semibold mb-3'>
                  Reklam Alanı
                </div>
                <div className='text-slate-400 text-base sm:text-lg'>560 × 588px</div>
              </div>
            </div>

            {/* Sağ taraf - Kayıt Formu */}
            <div className='w-full md:w-1/2 p-0 flex flex-col justify-center md:min-h-[588px]'>
              <BreadcrumbComponent
                items={[
                  { label: 'İhtiyaçkredisi.com', href: '/' },
                  { label: 'Kayıt Ol' },
                ]}
              />

              <h1 className='text-2xl leading-7 sm:text-[28px] sm:leading-[36px] font-semibold text-slate-900 mb-[32px] sm:mb-[40px] md:mb-[48px]'>
                Ücretsiz Kayıt Ol
              </h1>

              <form onSubmit={handleSubmit} className='space-y-[8px]'>
                {/* Ad Soyad */}
                <div className='flex flex-col sm:flex-row gap-3'>
                  <input
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='Adınız'
                    className='w-full sm:w-1/2 px-4 py-3 md:py-4 text-base md:text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary transition-all placeholder:text-slate-400 bg-white'
                  />
                  <input
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Soyadınız'
                    className='w-full sm:w-1/2 px-4 py-3 md:py-4 text-base md:text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary transition-all placeholder:text-slate-400 bg-white'
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='loremipsum@domain.com'
                    className='w-full px-4 py-3 md:py-4 text-base md:text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary transition-all placeholder:text-slate-400 bg-white'
                  />
                </div>

                {/* Telefon */}
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
                      className='w-full pl-[52px] md:pl-[60px] pr-4 py-3 md:py-4 text-base md:text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary transition-all placeholder:text-slate-400 bg-white'
                    />
                  </div>
                </div>

                {/* Şifre */}
                <div>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Şifreniz'
                      className='w-full px-4 py-3 md:py-4 pr-12 text-base md:text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary transition-all placeholder:text-slate-400 bg-white'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors'
                    >
                      {showPassword ? (
                        <FiEyeOff className='w-5 h-5 md:w-6 md:h-6' />
                      ) : (
                        <FiEye className='w-5 h-5 md:w-6 md:h-6' />
                      )}
                    </button>
                  </div>
                </div>

                {/* Şifre Tekrar */}
                <div>
                  <div className='relative'>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder='Şifreniz (Tekrardan)'
                      className='w-full px-4 py-3 md:py-4 pr-12 text-base md:text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-0 focus:border-primary transition-all placeholder:text-slate-400 bg-white'
                    />
                    <button
                      type='button'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors'
                    >
                      {showConfirmPassword ? (
                        <FiEyeOff className='w-5 h-5 md:w-6 md:h-6' />
                      ) : (
                        <FiEye className='w-5 h-5 md:w-6 md:h-6' />
                      )}
                    </button>
                  </div>
                </div>

                {/* Sözleşme Onayı */}
                <label className='flex items-center gap-3 mt-[24px] cursor-pointer select-none'>
                  <input
                    type='checkbox'
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className='ik-checkbox'
                  />
                  <span className='text-[14px] leading-[18px] text-slate-600'>
                    ihtiyackredisi.com
                    <Link
                      href='/uyelik-sozlesmesi'
                      target='_blank'
                      className='text-slate-900 font-medium hover:text-primary transition-colors text-[14px] leading-[18px]'
                    >
                      {' '}
                      Üyelik Sözleşmesi
                    </Link>
                    &apos;ni okudum ve kabul ediyorum
                  </span>
                </label>

                {/* Submit */}
                <button
                  type='submit'
                  className='w-full bg-primary hover:brightness-125 text-white font-bold py-[8px] px-[24px] rounded-full transition-all duration-300 text-[15px] leading-[20px] tracking-wider cursor-pointer min-h-[48px] md:min-h-[52px] my-6 md:my-[32px]'
                >
                  Hesap Oluştur
                </button>

                {/* Login link */}
                <div className='text-center text-base md:text-xl pt-4 flex flex-wrap items-center gap-3 md:gap-[16px] justify-center'>
                  <span className='text-slate-600'>
                    Hesabın var mı?
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

      {/* Telefon Doğrulama Modal */}
      <ModalComponent
        isOpen={showPhoneVerificationModal}
        onClose={closeVerificationModal}
        size='md'
        showCloseButton={true}
        closeOnOutsideClick={true}
        closeOnEsc={true}
      >
        {/* Modal içeriği */}
        <h2 className='text-[24px] leading-[32px] font-semibold text-slate-900 mb-[32px]'>
          Telefon Numaranıza Doğrulama Kodu Gönderdik
        </h2>

        {/* Doğrulama kodu input */}
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

        {/* Tekrar gönder text */}
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

        {/* Doğrula butonu */}
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
