'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FiMail, FiPhone, FiLock, FiCheckCircle } from 'react-icons/fi';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import ModalComponent from '@/components/common/ModalComponent';

function ProfilePage() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailValue, setEmailValue] = useState('lorem@ipsum.com');
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [phoneValue, setPhoneValue] = useState('+90 552 895 67 07');
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('k07dnvdf87VDFdhc78');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordAgain, setNewPasswordAgain] = useState('');
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showAgain, setShowAgain] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isPhoneVerificationStep, setIsPhoneVerificationStep] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const verificationInputRef = useRef(null);
  const verificationTimerRef = useRef(null);

  function openEmailModal() {
    setIsEmailModalOpen(true);
  }

  function closeEmailModal() {
    setIsEmailModalOpen(false);
  }

  function handleEmailSave() {
    // TODO: Persist new email via API when backend is ready
    closeEmailModal();
  }

  function openPhoneModal() {
    setIsPhoneModalOpen(true);
  }

  function closePhoneModal() {
    setIsPhoneModalOpen(false);
    setIsPhoneVerificationStep(false);
    setVerificationCode('');
    setResendTimer(0);
    if (verificationTimerRef.current) {
      clearInterval(verificationTimerRef.current);
      verificationTimerRef.current = null;
    }
  }

  function handlePhoneSave() {
    // TODO: Persist new phone via API when backend is ready
    setIsPhoneVerificationStep(true);
    setResendTimer(60);
  }

  function openPasswordModal() {
    setIsPasswordModalOpen(true);
  }

  function closePasswordModal() {
    setIsPasswordModalOpen(false);
    setShowOld(false);
    setShowNew(false);
    setShowAgain(false);
    setPasswordError('');
    setNewPassword('');
    setNewPasswordAgain('');
  }

  function handlePasswordSave() {
    if (!newPassword || !newPasswordAgain) {
      setPasswordError('Lütfen yeni şifrenizi girin');
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError('Şifre en az 8 karakter olmalı');
      return;
    }
    if (newPassword !== newPasswordAgain) {
      setPasswordError('Yeni şifreler eşleşmiyor');
      return;
    }
    // TODO: Persist password change via API
    closePasswordModal();
  }

  // Phone verification step side effects
  useEffect(() => {
    if (!isPhoneModalOpen || !isPhoneVerificationStep) return;

    // Focus the verification input
    if (verificationInputRef.current) verificationInputRef.current.focus();

    // Start countdown
    verificationTimerRef.current = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          if (verificationTimerRef.current)
            clearInterval(verificationTimerRef.current);
          verificationTimerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (verificationTimerRef.current) {
        clearInterval(verificationTimerRef.current);
        verificationTimerRef.current = null;
      }
    };
  }, [isPhoneModalOpen, isPhoneVerificationStep]);

  function formatVerificationCode(value) {
    const digits = value.replace(/\D/g, '').slice(0, 6);
    const left = digits.slice(0, 3);
    const right = digits.slice(3, 6);
    return right ? `${left}-${right}` : left;
  }

  function handleVerificationCodeChange(e) {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(raw);
  }

  function handleResendCode() {
    if (resendTimer > 0) return;
    setResendTimer(60);
  }

  function handleVerifyCode() {
    // TODO: Verify code via API
    closePhoneModal();
  }

  return (
    <div className='flex flex-col gap-y-[16px]'>
      <div className='rounded-[16px] border border-slate-200 bg-white p-[24px]'>
        <div className='flex flex-col gap-[12px] sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-[20px] mb-[20px]'>
          <h2 className='text-[14px] font-semibold leading-[18px] text-slate-900'>
            Kişisel Bilgileriniz
          </h2>

          <FeaturedButtonComponent text='Kaydet' buttonColor='accent' check />
        </div>

        <div className='grid grid-cols-12 gap-[12px]'>
          <div className='col-span-12 md:col-span-6'>
            <label className='flex w-full flex-col gap-y-[6px]'>
              <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                Adınız
              </span>
              <input
                type='text'
                defaultValue='Melisa'
                className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary pl-[12px] transition-colors duration-300'
              />
            </label>
          </div>
          <div className='col-span-12 md:col-span-6'>
            <label className='flex w-full flex-col gap-y-[6px]'>
              <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                Soyadınız
              </span>
              <input
                type='text'
                defaultValue='Ağcı'
                className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary pl-[12px] transition-colors duration-300'
              />
            </label>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] items-stretch'>
        <div className='flex group'>
          <div className='relative flex flex-col items-start justify-between gap-x-[12px] rounded-[16px] border border-slate-200 bg-white p-[24px] w-full h-[155px] transition-colors duration-300 group-hover:border-primary'>
            <button
              type='button'
              aria-label='E-Posta düzenle'
              className='absolute top-[24px] right-[24px] text-[12px] leading-[16px] text-slate-500 hover:text-primary transition-colors cursor-pointer'
              onClick={openEmailModal}
            >
              Düzenle
            </button>
            <div className='flex items-center justify-center rounded-full text-[28px] text-slate-700 mb-[20px]'>
              <FiMail />
            </div>
            <div className='flex flex-col gap-y-[8px]'>
              <p className='text-[15px] leading-[18px] text-slate-900 font-medium'>
                E-Posta Adresiniz
              </p>
              <span className='text-[14px] text-slate-600 leading-[16px]'>
                lorem@domain.com
              </span>
            </div>
          </div>
        </div>

        <div className='flex group'>
          <div className='relative flex flex-col items-start justify-between gap-x-[12px] rounded-[16px] border border-slate-200 bg-white p-[24px] w-full h-[155px] transition-colors duration-300 group-hover:border-primary'>
            <button
              type='button'
              aria-label='Telefon düzenle'
              className='absolute top-[24px] right-[24px] text-[12px] leading-[16px] text-slate-500 hover:text-primary transition-colors cursor-pointer'
              onClick={openPhoneModal}
            >
              Düzenle
            </button>
            <div className='flex items-center justify-center rounded-full text-[28px] text-slate-700 mb-[20px]'>
              <FiPhone />
            </div>
            <div className='flex flex-col gap-y-[8px]'>
              <div className='flex items-center gap-[8px]'>
                <p className='text-[15px] leading-[18px] text-slate-900 font-medium'>
                  Telefonunuz
                </p>
              </div>
              <div className='flex items-center gap-[8px]'>
                <span className='text-[12px] leading-[16px] text-slate-500'>
                  +90 552 895 6707
                </span>
                <span className='inline-flex items-center gap-[6px] text-[12px] leading-[16px] font-medium text-blue-600 bg-blue-50 px-[8px] py-[4px] rounded-[999px]'>
                  <FiCheckCircle className='text-[14px]' />
                  SMS onaylı
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex group'>
          <div className='relative flex flex-col items-start justify-between gap-x-[12px] rounded-[16px] border border-slate-200 bg-white p-[24px] w-full h-[155px] transition-colors duration-300 group-hover:border-primary'>
            <button
              type='button'
              aria-label='Şifre düzenle'
              className='absolute top-[24px] right-[24px] text-[12px] leading-[16px] text-slate-500 hover:text-primary transition-colors cursor-pointer'
              onClick={openPasswordModal}
            >
              Düzenle
            </button>
            <div className='flex items-center justify-center rounded-full text-[28px] text-slate-700 mb-[20px]'>
              <FiLock />
            </div>
            <div className='flex flex-col gap-y-[8px]'>
              <p className='text-[15px] leading-[18px] text-slate-900 font-medium'>
                Şifreniz
              </p>
              <span className='text-[14px] text-slate-600 leading-[16px]'>
                En son 3 ay önce değiştirdiniz.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* E-Posta Düzenleme Modal */}
      <ModalComponent
        isOpen={isEmailModalOpen}
        onClose={closeEmailModal}
        size='md'
      >
        <div className='flex flex-col gap-[20px]'>
          <h3 className='text-[18px] font-semibold leading-[22px] text-slate-900'>
            E-Posta Adresinizi Değiştirin
          </h3>

          <label className='flex w-full flex-col gap-y-[6px]'>
            <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
              Yeni E-Posta Adresiniz
            </span>
            <input
              type='email'
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder='lorem@ipsum.com'
              className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary pl-[12px] transition-colors duration-300'
            />
          </label>

          <FeaturedButtonComponent
            text='Kaydet'
            buttonColor='primary'
            addClass='w-full justify-center text-[14px] py-[12px]'
            onClick={handleEmailSave}
          />
        </div>
      </ModalComponent>

      {/* Telefon Düzenleme Modal */}
      <ModalComponent
        isOpen={isPhoneModalOpen}
        onClose={closePhoneModal}
        size='md'
      >
        {!isPhoneVerificationStep ? (
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-[18px] font-semibold leading-[22px] text-slate-900'>
              Telefon Numaranızı Değiştirin
            </h3>

            <label className='flex w-full flex-col gap-y-[6px]'>
              <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                Yeni Telefon Numaranız
              </span>
              <input
                type='tel'
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                placeholder='+90 552 895 67 07'
                className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary pl-[12px] transition-colors duration-300'
              />
            </label>

            <FeaturedButtonComponent
              text='Kaydet'
              buttonColor='primary'
              addClass='w-full justify-center text-[14px] py-[12px]'
              onClick={handlePhoneSave}
            />
          </div>
        ) : (
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-[18px] font-semibold leading-[22px] text-slate-900'>
              Telefon Numaranıza Doğrulama Kodu Gönderdik
            </h3>

            <input
              ref={verificationInputRef}
              type='text'
              value={formatVerificationCode(verificationCode)}
              onChange={handleVerificationCodeChange}
              placeholder='000-000'
              className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary pl-[12px] transition-colors duration-300 text-center tracking-wider font-mono'
              maxLength='7'
              autoComplete='off'
            />

            <div className='text-center'>
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

            <FeaturedButtonComponent
              text='Doğrula'
              buttonColor='primary'
              addClass='w-full justify-center text-[14px] py-[12px]'
              onClick={handleVerifyCode}
            />
          </div>
        )}
      </ModalComponent>

      {/* Şifre Düzenleme Modal */}
      <ModalComponent
        isOpen={isPasswordModalOpen}
        onClose={closePasswordModal}
        size='md'
      >
        <div className='flex flex-col gap-[20px]'>
          <h3 className='text-[18px] font-semibold leading-[22px] text-slate-900'>
            Yeni Şifrenizi Belirleyin
          </h3>

          <div className='flex flex-col gap-[14px]'>
            <label className='flex w-full flex-col gap-y-[6px]'>
              <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                Eski Şifreniz
              </span>
              <div className='relative'>
                <input
                  type={showOld ? 'text' : 'password'}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white pr-[44px] px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary transition-colors duration-300'
                />
                <button
                  type='button'
                  onClick={() => setShowOld((v) => !v)}
                  className='absolute right-[12px] top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700'
                >
                  {showOld ? (
                    <IoEyeOffOutline className='text-[18px]' />
                  ) : (
                    <IoEyeOutline className='text-[18px]' />
                  )}
                </button>
              </div>
            </label>

            <label className='flex w-full flex-col gap-y-[6px]'>
              <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                Yeni Şifrenizi Oluşturun
              </span>
              <div className='relative'>
                <input
                  type={showNew ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder=''
                  className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white pr-[44px] px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary transition-colors duration-300'
                />
                <button
                  type='button'
                  onClick={() => setShowNew((v) => !v)}
                  className='absolute right-[12px] top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700'
                >
                  {showNew ? (
                    <IoEyeOffOutline className='text-[18px]' />
                  ) : (
                    <IoEyeOutline className='text-[18px]' />
                  )}
                </button>
              </div>
            </label>

            <label className='flex w-full flex-col gap-y-[6px]'>
              <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                Yeni Şifrenizi Oluşturun
              </span>
              <div className='relative'>
                <input
                  type={showAgain ? 'text' : 'password'}
                  value={newPasswordAgain}
                  onChange={(e) => setNewPasswordAgain(e.target.value)}
                  className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white pr-[44px] px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary transition-colors duration-300'
                />
                <button
                  type='button'
                  onClick={() => setShowAgain((v) => !v)}
                  className='absolute right-[12px] top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700'
                >
                  {showAgain ? (
                    <IoEyeOffOutline className='text-[18px]' />
                  ) : (
                    <IoEyeOutline className='text-[18px]' />
                  )}
                </button>
              </div>
            </label>
          </div>

          {passwordError && (
            <div className='text-red-600 text-[12px] leading-[16px] pl-[12px]'>
              {passwordError}
            </div>
          )}

          <FeaturedButtonComponent
            text='Kaydet'
            buttonColor='primary'
            addClass='w-full justify-center text-[14px] py-[12px]'
            onClick={handlePasswordSave}
          />
        </div>
      </ModalComponent>

      {/* Yorum modalları bu sayfada kullanılmıyor */}
    </div>
  );
}

export default ProfilePage;
