'use client';

import { useRef, useState, useEffect } from 'react';

export default function OTPInput({ value, onChange, length = 6, disabled = false }) {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  // Sync internal state with value prop
  useEffect(() => {
    if (value) {
      const valueArray = value.split('').slice(0, length);
      const paddedArray = [...valueArray, ...Array(length - valueArray.length).fill('')];
      setOtp(paddedArray);
    } else {
      setOtp(Array(length).fill(''));
    }
  }, [value, length]);

  const handleChange = (index, value) => {
    if (disabled) return;

    // Only allow numbers
    const newValue = value.replace(/\D/g, '').slice(0, 1);
    
    if (newValue === '' && value !== '') return;

    const newOtp = [...otp];
    newOtp[index] = newValue;
    setOtp(newOtp);

    const otpString = newOtp.join('');
    onChange(otpString);

    // Auto-focus next input
    if (newValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    
    if (pastedData.length === 0) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length && i < length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    const otpString = newOtp.join('');
    onChange(otpString);

    // Focus last filled input or next empty
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          className="w-12 h-12 text-center text-lg font-semibold border-2 border-slate-300 rounded-lg focus:border-primary focus:outline-none disabled:bg-slate-100 disabled:cursor-not-allowed transition-colors"
        />
      ))}
    </div>
  );
}

