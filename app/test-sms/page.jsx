'use client';

import { useState, useTransition } from 'react';
import { sendOtpAction, verifyOtpAction } from '@/app/actions/auth-sms';
import toast from 'react-hot-toast';

export default function TestSmsPage() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [step, setStep] = useState('phone'); // 'phone' | 'verify' | 'success'
    const [isPending, startTransition] = useTransition();

    const handleSendOtp = () => {
        if (!phoneNumber) return toast.error('Lütfen telefon numarası giriniz.');

        startTransition(async () => {
            const result = await sendOtpAction(phoneNumber);
            if (result.success) {
                toast.success(result.message);
                setStep('verify');
            } else {
                toast.error(result.message);
            }
        });
    };

    const handleVerifyOtp = () => {
        if (!otpCode) return toast.error('Lütfen kodu giriniz.');

        startTransition(async () => {
            const result = await verifyOtpAction(otpCode);
            if (result.success) {
                toast.success(result.message);
                setStep('success');
            } else {
                toast.error(result.message);
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">SMS Doğrulama Testi</h1>

                {step === 'phone' && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Telefon Numarası</label>
                            <input
                                type="tel"
                                placeholder="0555 123 45 67"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                            <p className="text-xs text-gray-500 mt-1">Başında 0 olmadan veya 0 ile yazabilirsiniz.</p>
                        </div>

                        <button
                            onClick={handleSendOtp}
                            disabled={isPending}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isPending ? 'Gönderiliyor...' : 'Kod Gönder'}
                        </button>
                    </div>
                )}

                {step === 'verify' && (
                    <div className="space-y-4">
                        <div className="text-center mb-4">
                            <p className="text-gray-600">
                                <span className="font-semibold text-gray-800">{phoneNumber}</span> numarasına gönderilen 6 haneli kodu giriniz.
                            </p>
                            <button
                                onClick={() => setStep('phone')}
                                className="text-xs text-blue-500 hover:text-blue-700 mt-2 underline"
                            >
                                Numarayı Değiştir
                            </button>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Doğrulama Kodu</label>
                            <input
                                type="text"
                                placeholder="123456"
                                maxLength={6}
                                value={otpCode}
                                onChange={(e) => setOtpCode(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-center tracking-widest text-lg font-mono"
                            />
                        </div>

                        <button
                            onClick={handleVerifyOtp}
                            disabled={isPending}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isPending ? 'Doğrulanıyor...' : 'Doğrula'}
                        </button>
                    </div>
                )}

                {step === 'success' && (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Başarılı!</h2>
                        <p className="text-gray-600">Telefon numarası başarıyla doğrulandı.</p>

                        <button
                            onClick={() => { setStep('phone'); setOtpCode(''); setPhoneNumber(''); }}
                            className="mt-6 text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Testi Tekrarla
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
