'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';

export default function GirisPage() {
  const [loginMethod, setLoginMethod] = useState('phone');
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleGoogleSignIn = () => { 
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
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

  return (
    <div className='flex items-center justify-center px-4 pt-8 md:pt-[56px]'>
      <div className='custom-container-1 rounded-2xl overflow-hidden border border-slate-100'>
        <div className='flex flex-col-reverse md:flex-row items-stretch md:items-center justify-between gap-y-10 md:gap-y-0 md:gap-x-[80px]'>
          <div className='w-full md:w-1/2 bg-slate-200 rounded-2xl md:rounded-[32px] flex items-center justify-center p-6 sm:p-8 md:p-12 min-h-[200px] sm:min-h-[280px] md:min-h-[588px] relative overflow-hidden'>
            <div className='text-center relative z-10'>
              <div className='text-slate-500 text-2xl font-semibold mb-3'>
                Reklam Alanı
              </div>
              <div className='text-slate-400 text-lg'>560 × 588px</div>
            </div>
          </div>

          <div className='w-full md:w-1/2 p-0 flex flex-col justify-center md:min-h-[588px]'>
            <BreadcrumbComponent
              items={[
                { label: 'İhtiyaçkredisi.com', href: '/' },
                { label: 'Giriş Yap' },
              ]}
            />

            <h1 className='text-2xl leading-7 sm:text-[28px] sm:leading-[36px] font-semibold text-slate-900 mb-[32px] sm:mb-[40px] md:mb-[48px]'>
              Hesabınıza Giriş Yapın
            </h1>

            {/* Login method tabs */}
            <div className='flex mb-[24px] bg-slate-100 border border-slate-200 rounded-[16px] select-none'>
              <button
                onClick={() => setLoginMethod('phone')}
                className={`cursor-pointer flex-1 py-3 px-4 rounded-[16px] transition-all duration-200 font-medium text-[15px] leading-[20px] ${
                  loginMethod === 'phone'
                    ? 'bg-white text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Telefon ile
              </button>
              <button
                onClick={() => setLoginMethod('email')}
                className={`cursor-pointer flex-1 py-3 px-4 rounded-[16px] transition-all duration-200 font-medium text-[15px] leading-[20px] ${
                  loginMethod === 'email'
                    ? 'bg-white text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                E-Posta ile
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className='space-y-[8px]'
            >
              {/* Phone/Email Input */}
              {loginMethod === 'phone' ? (
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

              {/* Password Input */}
              <div>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='••••••••'
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

              {/* Remember me and Forgot password */}
              <div className='flex flex-wrap items-center justify-between gap-3 mt-[16px] '>
                <label className='flex items-center space-x-2 cursor-pointer select-none'>
                  <input
                    type='checkbox'
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className='ik-checkbox'
                  />
                  <span className='text-[14px] leading-[18px] text-slate-600'>
                    Beni hatırla
                  </span>
                </label>
                <Link
                  href='/sifremi-unuttum'
                  className='text-[14px] leading-[18px] text-slate-600 hover:text-primary transition-colors select-none'
                >
                  Şifremi Unuttum
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-primary hover:brightness-125 text-white font-bold py-[8px] px-[24px] rounded-full transition-all duration-300 text-[15px] leading-[20px] tracking-wider cursor-pointer min-h-[48px] md:min-h-[52px] my-6 md:my-[32px]'
              >
                Giriş Yap
              </button>

              {/* Divider */}
              <div className='relative mt-[8px] mb-[32px]'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-slate-200'></div>
                </div>
                <div className='relative flex justify-center'>
                  <span className='bg-transparent px-3 text-slate-500 text-[13px] leading-[16px]'>
                    veya
                  </span>
                </div>
              </div>

              {/* Google Sign-in */}
              <button
                type='button'
                onClick={handleGoogleSignIn}
                className='w-full bg-white hover:border-primary text-slate-900 font-semibold py-[8px] px-[24px] rounded-full transition-all duration-300 text-[15px] leading-[20px] tracking-wider cursor-pointer min-h-[52px] border-2 border-slate-200 flex items-center justify-center gap-2 md:gap-3'
              >
                <Image
                  src='/google.png'
                  alt='Google logosu'
                  width={20}
                  height={20}
                  className='rounded-sm'
                />
                Google ile giriş yap
              </button>

              {/* Sign up link */}
              <div className='text-center text-base md:text-xl pt-4 flex flex-wrap items-center gap-3 md:gap-[16px] justify-center'>
                <span className='text-slate-600'>
                  Hesabın yok mu?{' '}
                </span>
                <Link
                  href='/kayit-ol'
                  className='text-slate-900 font-semibold hover:text-primary transition-colors duration-300'
                >
                  Hesap Oluşturun
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
