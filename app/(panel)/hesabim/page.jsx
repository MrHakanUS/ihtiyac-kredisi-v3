'use client';

import { useAuth } from '@/hooks/useAuth';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FiMail, FiPhone, FiLock, FiCheck, FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import { formatPhone, normalizePhone, isValidPhone } from '@/lib/utils/phone';
import ModalComponent from '@/components/common/ModalComponent';
import toast from 'react-hot-toast';
import { updatePassword, updateProfile, getCurrentUser } from '@/app/api/web/services';
import OTPInput from '@/components/auth/OTPInput';

export default function HesabimPage() {
    const { user, isLoading, logout } = useAuth();
    const { data: session, update: updateSession } = useSession();
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Update state when user data loads from session
    useEffect(() => {
        if (user) {
            setFirstName(user.firstName || '');
            setLastName(user.lastName || '');
        }
    }, [user]);

    const [focusedField, setFocusedField] = useState(null);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [isSavingEmail, setIsSavingEmail] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSavingPassword, setIsSavingPassword] = useState(false);
    const [passwordFocusedField, setPasswordFocusedField] = useState(null);
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [newPhone, setNewPhone] = useState('');
    const [phoneFocusedField, setPhoneFocusedField] = useState(null);
    const [isSavingPhone, setIsSavingPhone] = useState(false);
    const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [resendTimer, setResendTimer] = useState(0);
    const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
    const [pendingPhone, setPendingPhone] = useState('');
    const [isSavingProfile, setIsSavingProfile] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDeletingAccount, setIsDeletingAccount] = useState(false);

    // Format phone number for display (from session)
    const displayPhone = user?.phone ? formatPhone(user.phone) : '';

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
            setNewPhone(formatted);
        }
    };

    const handlePhoneSave = async () => {
        if (!newPhone) {
            toast.error('Telefon numarası giriniz');
            return;
        }

        let normalized = normalizePhone(newPhone);
        // If phone includes country code (90), remove it
        if (normalized.length === 12 && normalized.startsWith('90')) {
            normalized = normalized.slice(2);
        }

        if (!isValidPhone(normalized)) {
            toast.error('Geçerli bir telefon numarası giriniz (5XX XXX XX XX)');
            return;
        }

        // Check if the phone number is the same as the current one
        const currentPhone = user?.phone || '';
        if (normalized === currentPhone) {
            toast.error('Eklemeye çalıştığınız telefon numarası zaten kayıtlı');
            return;
        }

        setIsSavingPhone(true);
        try {
            // Send OTP to new phone number
            const response = await fetch('/api/auth/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: `+90${normalized}` }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'OTP gönderilemedi');
            }

            // Close phone modal and open OTP modal
            setIsPhoneModalOpen(false);
            setPendingPhone(normalized);
            setIsOTPModalOpen(true);
            setResendTimer(60); // Start 60 second timer
            setNewPhone('');
        } catch (error) {
            toast.error(error.message || 'Telefon numarası güncellenirken bir hata oluştu');
        } finally {
            setIsSavingPhone(false);
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


    const handleResendOTP = async () => {
        if (resendTimer > 0) return;

        try {
            const response = await fetch('/api/auth/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: `+90${pendingPhone}` }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'OTP gönderilemedi');
            }

            toast.success('Yeni sıfırlama kodu gönderildi');
            setResendTimer(60);
            setOtpCode('');
        } catch (error) {
            toast.error(error.message || 'OTP gönderilemedi');
        }
    };

    const handleVerifyOTP = async () => {
        if (!otpCode || otpCode.length !== 6) {
            toast.error('OTP kodunu giriniz');
            return;
        }

        setIsVerifyingOTP(true);
        try {
            // Update phone number (this endpoint also verifies OTP)
            const updateResponse = await fetch('/api/web/post/user/update-phone', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: `+90${pendingPhone}`,
                    code: otpCode
                }),
            });

            if (!updateResponse.ok) {
                const data = await updateResponse.json();
                throw new Error(data.error || 'Telefon numarası güncellenemedi');
            }

            const result = await updateResponse.json();

            toast.success(result.message || 'Telefon numarası güncellendi');

            // Update NextAuth session with new user data
            if (updateSession && result.user) {
                await updateSession({
                    user: {
                        phone: result.user.phone,
                    },
                });
            }

            // Refresh the page to show updated phone number
            router.refresh();

            setIsOTPModalOpen(false);
            setOtpCode('');
            setPendingPhone('');
            setResendTimer(0);
        } catch (error) {
            console.error('Phone update error:', error);
            toast.error(error.message || 'Telefon numarası güncellenirken bir hata oluştu');
        } finally {
            setIsVerifyingOTP(false);
        }
    };

    const handleEmailSave = async () => {
        if (!newEmail || !newEmail.includes('@')) {
            toast.error('Geçerli bir e-posta adresi giriniz');
            return;
        }

        // Check if the email is the same as the current one
        const currentEmail = user?.email || '';
        const newEmailTrimmed = newEmail.trim().toLowerCase();
        if (currentEmail && currentEmail.toLowerCase() === newEmailTrimmed) {
            toast.error('Eklemeye çalıştığınız e-posta adresi zaten kayıtlı');
            return;
        }

        setIsSavingEmail(true);
        try {
            const result = await updateProfile({
                firstName: firstName || user?.firstName || '',
                lastName: lastName || user?.lastName || '',
                email: newEmail.trim(),
            });

            toast.success(result.message || 'E-posta adresi güncellendi');

            // Update NextAuth session with new user data
            if (updateSession && result.user) {
                await updateSession({
                    user: {
                        firstName: result.user.firstName,
                        lastName: result.user.lastName,
                        email: result.user.email,
                    },
                });
            }

            // Refresh the page to show updated email
            router.refresh();

            setIsEmailModalOpen(false);
            setNewEmail('');
        } catch (error) {
            console.error('Email update error:', error);
            toast.error(error.message || 'E-posta güncellenirken bir hata oluştu');
        } finally {
            setIsSavingEmail(false);
        }
    };

    // Update user profile (first name, last name)
    const handleProfileSave = async () => {
        if (!firstName || !lastName) {
            toast.error('Ad ve soyad alanlarını doldurunuz');
            return;
        }

        if (firstName.trim().length === 0 || lastName.trim().length === 0) {
            toast.error('Ad ve soyad boş olamaz');
            return;
        }

        if (firstName.length > 50 || lastName.length > 50) {
            toast.error('Ad ve soyad en fazla 50 karakter olabilir');
            return;
        }

        setIsSavingProfile(true);
        try {
            const result = await updateProfile({
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: user?.email || '',
            });

            toast.success(result.message || 'Profil başarıyla güncellendi');

            // Update NextAuth session with new user data
            // This will trigger the JWT callback with trigger: 'update' and fetch fresh data from database
            if (updateSession && result.user) {
                await updateSession({
                    user: {
                        firstName: result.user.firstName,
                        lastName: result.user.lastName,
                        email: result.user.email,
                    },
                });
            }

            // Update local state from result (will be synced with session via useEffect)
            setFirstName(result.user.firstName || '');
            setLastName(result.user.lastName || '');
        } catch (error) {
            console.error('Profile update error:', error);
            toast.error(error.message || 'Profil güncellenirken bir hata oluştu');
        } finally {
            setIsSavingProfile(false);
        }
    };

    const handleDeleteAccount = async () => {
        setIsDeletingAccount(true);
        try {
            const response = await fetch('/api/web/post/user/deactivate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Hesap askıya alınırken bir hata oluştu');
            }

            toast.success('Hesabınız başarıyla askıya alındı');
            
            // Logout and redirect to login page
            await logout();
        } catch (error) {
            console.error('Account deletion error:', error);
            toast.error(error.message || 'Hesap askıya alınırken bir hata oluştu');
        } finally {
            setIsDeletingAccount(false);
            setIsDeleteModalOpen(false);
        }
    };

    const handlePasswordSave = async () => {
        if (!oldPassword || !newPassword || !confirmPassword) {
            toast.error('Tüm alanları doldurunuz');
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error('Yeni şifreler eşleşmiyor');
            return;
        }

        if (newPassword.length < 6) {
            toast.error('Şifre en az 6 karakter olmalıdır');
            return;
        }

        setIsSavingPassword(true);
        try {
            const result = await updatePassword({
                oldPassword,
                newPassword,
                confirmPassword,
            });

            toast.success(result.message || 'Şifre başarıyla güncellendi');
            setIsPasswordModalOpen(false);
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setPasswordFocusedField(null);
        } catch (error) {
            console.error('Password update error:', error);
            toast.error(error.message || 'Şifre güncellenirken bir hata oluştu');
        } finally {
            setIsSavingPassword(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Personal Info Card - Figma Design */}
            <div className="bg-white rounded-[24px] shadow-sm p-0 relative h-[196px]">
                {/* Header with Title */}
                <div className="flex items-center justify-between px-6 pt-6">
                    <h2 className="font-['Inter',sans-serif] font-medium text-[16px] text-[color:var(--slate-900,#0f172b)]">
                        Kişisel Bilgileriniz
                    </h2>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[var(--slate-200,#e2e8f0)] mt-4 mx-6"></div>

                {/* Form Fields */}
                <div className="flex gap-5 items-start px-6 pt-5">
                    {/* First Name Field */}
                    <div className="flex-1 flex flex-col gap-3 items-start">
                        <div className="flex items-center justify-center px-3 py-0 shrink-0">
                            <label className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-600,#45556c)]">
                                Adınız
                            </label>
                        </div>
                        <div className="bg-[var(--slate-100,#f1f5f9)] border border-solid border-[color:var(--slate-200,#e2e8f0)] flex h-[52px] items-center overflow-clip px-4 py-3 rounded-[16px] w-full transition-all">
                            <input
                                type="text"
                                value={firstName}
                                disabled
                                placeholder="Adınız"
                                className="font-['Inter',sans-serif] font-normal text-[15px] text-[color:var(--slate-600,#45556c)] bg-transparent outline-none w-full cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Last Name Field */}
                    <div className="flex-1 flex flex-col gap-3 items-start">
                        <div className="flex items-center justify-center px-4 py-0 shrink-0">
                            <label className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-600,#45556c)]">
                                Soyadınız
                            </label>
                        </div>
                        <div className="bg-[var(--slate-100,#f1f5f9)] border border-solid border-[color:var(--slate-200,#e2e8f0)] flex h-[52px] items-center overflow-clip px-4 py-3 rounded-[16px] w-full transition-all">
                            <input
                                type="text"
                                value={lastName}
                                disabled
                                placeholder="Soyadınız"
                                className="font-['Inter',sans-serif] font-normal text-[15px] text-[color:var(--slate-600,#45556c)] bg-transparent outline-none w-full cursor-not-allowed"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Cards Grid - Figma Design */}
            <div className="flex gap-4 items-center w-full">
                {/* Email Card */}
                <div
                    onClick={() => {
                        setIsEmailModalOpen(true);
                        setNewEmail(user?.email || '');
                    }}
                    className="bg-white flex flex-1 flex-col gap-5 items-start p-6 rounded-[24px] shrink-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                >
                    <div className="relative shrink-0 size-7">
                        <FiMail className="size-full text-[color:var(--slate-900,#0f172b)]" />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                        <p className="font-['Inter',sans-serif] font-medium text-[15px] text-[color:var(--slate-900,#0f172b)] whitespace-nowrap">
                            E-Posta Adresiniz
                        </p>
                        <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-600,#45556c)]">
                            {user?.email ? `Düzenle: ${user.email}` : 'E-posta ekle'}
                        </p>
                    </div>
                </div>

                {/* Phone Card */}
                <div
                    onClick={() => {
                        setIsPhoneModalOpen(true);
                        setNewPhone(displayPhone || '');
                    }}
                    className="bg-white flex flex-1 flex-col gap-5 items-start p-6 rounded-[24px] shrink-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                >
                    <div className="relative shrink-0 size-7">
                        <FiPhone className="size-full text-[color:var(--slate-900,#0f172b)]" />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                        <p className="font-['Inter',sans-serif] font-medium text-[15px] text-[color:var(--slate-900,#0f172b)]">
                            Telefonunuz
                        </p>
                        <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-600,#45556c)]">
                            {user?.phone ? `Düzenle: ${displayPhone}` : 'Telefon ekle'}
                        </p>
                    </div>
                </div>

                {/* Password Card */}
                <div
                    onClick={() => setIsPasswordModalOpen(true)}
                    className="bg-white flex flex-1 flex-col gap-5 items-start p-6 rounded-[24px] shrink-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                >
                    <div className="relative shrink-0 size-7">
                        <FiLock className="size-full text-[color:var(--slate-900,#0f172b)]" />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                        <p className="font-['Inter',sans-serif] font-medium text-[15px] text-[color:var(--slate-900,#0f172b)]">
                            Şifreniz
                        </p>
                        <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-600,#45556c)]">
                            Şifrenizi güvenli tutun
                        </p>
                    </div>
                </div>
            </div>

            {/* Email Change Modal */}
            <ModalComponent
                isOpen={isEmailModalOpen}
                onClose={() => {
                    setIsEmailModalOpen(false);
                    setNewEmail('');
                }}
                showCloseButton={false}
                closeOnOutsideClick={false}
                closeOnEsc={false}
                size="md"
                className="bg-[var(--slate-100,#f1f5f9)] p-8"
            >
                <div className="flex flex-col gap-8 items-start w-full">
                    {/* Header */}
                    <div className="flex gap-8 items-start w-full">
                        <h2 className="flex-1 font-['Inter',sans-serif] font-semibold text-[20px] text-[color:var(--slate-900,#0f172b)] whitespace-pre-wrap">
                            E-Posta Adresinizi Değiştirin
                        </h2>
                        <button
                            onClick={() => {
                                setIsEmailModalOpen(false);
                                setNewEmail('');
                            }}
                            className="relative shrink-0 size-5 hover:opacity-70 transition-opacity cursor-pointer"
                            aria-label="Kapat"
                        >
                            <FiX className="size-full text-[color:var(--slate-900,#0f172b)]" />
                        </button>
                    </div>

                    {/* Form */}
                    <div className="flex flex-col gap-8 items-start w-full">
                        {/* Email Input */}
                        <div className="flex flex-col gap-3 items-start w-full">
                            <div className="flex items-center justify-center px-3 py-0 shrink-0">
                                <label className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-900,#0f172b)]">
                                    Yeni E-Posta Adresiniz
                                </label>
                            </div>
                            <div className="bg-white border border-[var(--slate-900,#0f172b)] border-solid flex h-[52px] items-center overflow-clip px-4 py-3 rounded-[16px] w-full">
                                <input
                                    type="email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    placeholder="ornek@email.com"
                                    className="font-['Inter',sans-serif] font-normal text-[15px] text-[color:var(--slate-900,#0f172b)] bg-transparent outline-none w-full"
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* Save Button */}
                        <button
                            onClick={handleEmailSave}
                            disabled={isSavingEmail || !newEmail}
                            className="bg-[var(--primary,#ff6900)] flex h-[52px] items-center justify-center px-6 rounded-[32px] w-full hover:bg-[#e55a00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="font-['Inter',sans-serif] font-bold text-[15px] text-white leading-normal">
                                {isSavingEmail ? 'Kaydediliyor...' : 'Kaydet'}
                            </span>
                        </button>
                    </div>
                </div>
            </ModalComponent>

            {/* Password Change Modal */}
            <ModalComponent
                isOpen={isPasswordModalOpen}
                onClose={() => {
                    setIsPasswordModalOpen(false);
                    setOldPassword('');
                    setNewPassword('');
                    setConfirmPassword('');
                    setPasswordFocusedField(null);
                }}
                showCloseButton={false}
                closeOnOutsideClick={false}
                closeOnEsc={false}
                size="md"
                className="bg-[var(--slate-100,#f1f5f9)] p-8"
            >
                <div className="flex flex-col gap-8 items-start w-full">
                    {/* Header */}
                    <div className="flex gap-8 items-start w-full">
                        <h2 className="flex-1 font-['Inter',sans-serif] font-semibold text-[20px] text-[color:var(--slate-900,#0f172b)] whitespace-pre-wrap">
                            Yeni Şifrenizi Belirleyin
                        </h2>
                        <button
                            onClick={() => {
                                setIsPasswordModalOpen(false);
                                setOldPassword('');
                                setNewPassword('');
                                setConfirmPassword('');
                                setPasswordFocusedField(null);
                            }}
                            className="relative shrink-0 size-5 hover:opacity-70 transition-opacity cursor-pointer"
                            aria-label="Kapat"
                        >
                            <FiX className="size-full text-[color:var(--slate-900,#0f172b)]" />
                        </button>
                    </div>

                    {/* Form */}
                    <div className="flex flex-col gap-8 items-start w-full">
                        <div className="flex flex-col gap-6 items-start w-full">
                            {/* Old Password Input */}
                            <div className="flex flex-col gap-3 items-start w-full">
                                <div className="flex items-center justify-center px-3 py-0 shrink-0">
                                    <label className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-900,#0f172b)]">
                                        Eski Şifreniz
                                    </label>
                                </div>
                                <div className={`bg-white border border-solid flex h-[52px] items-center justify-between overflow-clip px-4 py-3 rounded-[16px] w-full transition-all ${passwordFocusedField === 'oldPassword'
                                    ? 'border-[1.5px] border-[color:var(--slate-900,#0f172b)]'
                                    : 'border border-[color:var(--slate-200,#e2e8f0)]'
                                    }`}>
                                    <input
                                        type={showOldPassword ? 'text' : 'password'}
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                        onFocus={() => setPasswordFocusedField('oldPassword')}
                                        onBlur={() => setPasswordFocusedField(null)}
                                        placeholder="Eski şifrenizi giriniz"
                                        className="font-['Inter',sans-serif] font-normal text-[15px] text-[color:var(--slate-900,#0f172b)] bg-transparent outline-none w-full"
                                        autoFocus
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowOldPassword(!showOldPassword)}
                                        className="relative shrink-0 size-5 hover:opacity-70 transition-opacity"
                                        aria-label={showOldPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                                    >
                                        {showOldPassword ? (
                                            <FiEyeOff className="size-full text-[color:var(--slate-900,#0f172b)]" />
                                        ) : (
                                            <FiEye className="size-full text-[color:var(--slate-900,#0f172b)]" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* New Password Input */}
                            <div className="flex flex-col gap-3 items-start w-full">
                                <div className="flex items-center justify-center px-3 py-0 shrink-0">
                                    <label className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-900,#0f172b)]">
                                        Yeni Şifrenizi Oluşturun
                                    </label>
                                </div>
                                <div className={`bg-white border border-solid flex h-[52px] items-center justify-between overflow-clip px-4 py-3 rounded-[16px] w-full transition-all ${passwordFocusedField === 'newPassword'
                                    ? 'border-[1.5px] border-[color:var(--slate-900,#0f172b)]'
                                    : 'border border-[color:var(--slate-200,#e2e8f0)]'
                                    }`}>
                                    <input
                                        type={showNewPassword ? 'text' : 'password'}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        onFocus={() => setPasswordFocusedField('newPassword')}
                                        onBlur={() => setPasswordFocusedField(null)}
                                        placeholder="Yeni şifrenizi giriniz"
                                        className="font-['Inter',sans-serif] font-normal text-[15px] text-[color:var(--slate-900,#0f172b)] bg-transparent outline-none w-full"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="relative shrink-0 size-5 hover:opacity-70 transition-opacity"
                                        aria-label={showNewPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                                    >
                                        {showNewPassword ? (
                                            <FiEyeOff className="size-full text-[color:var(--slate-900,#0f172b)]" />
                                        ) : (
                                            <FiEye className="size-full text-[color:var(--slate-900,#0f172b)]" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Input */}
                            <div className="flex flex-col gap-3 items-start w-full">
                                <div className="flex items-center justify-center px-3 py-0 shrink-0">
                                    <label className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-900,#0f172b)]">
                                        Yeni Şifrenizi Oluşturun
                                    </label>
                                </div>
                                <div className={`bg-white border border-solid flex h-[52px] items-center justify-between overflow-clip px-4 py-3 rounded-[16px] w-full transition-all ${passwordFocusedField === 'confirmPassword'
                                    ? 'border-[1.5px] border-[color:var(--slate-900,#0f172b)]'
                                    : 'border border-[color:var(--slate-200,#e2e8f0)]'
                                    }`}>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        onFocus={() => setPasswordFocusedField('confirmPassword')}
                                        onBlur={() => setPasswordFocusedField(null)}
                                        placeholder="Yeni şifrenizi tekrar giriniz"
                                        className="font-['Inter',sans-serif] font-normal text-[15px] text-[color:var(--slate-900,#0f172b)] bg-transparent outline-none w-full"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="relative shrink-0 size-5 hover:opacity-70 transition-opacity"
                                        aria-label={showConfirmPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                                    >
                                        {showConfirmPassword ? (
                                            <FiEyeOff className="size-full text-[color:var(--slate-900,#0f172b)]" />
                                        ) : (
                                            <FiEye className="size-full text-[color:var(--slate-900,#0f172b)]" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <button
                            onClick={handlePasswordSave}
                            disabled={isSavingPassword || !oldPassword || !newPassword || !confirmPassword}
                            className="bg-[var(--primary,#ff6900)] flex h-[52px] items-center justify-center px-6 rounded-[32px] w-full hover:bg-[#e55a00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="font-['Inter',sans-serif] font-bold text-[15px] text-white leading-normal">
                                {isSavingPassword ? 'Kaydediliyor...' : 'Kaydet'}
                            </span>
                        </button>
                    </div>
                </div>
            </ModalComponent>

            {/* Phone Change Modal */}
            <ModalComponent
                isOpen={isPhoneModalOpen}
                onClose={() => {
                    setIsPhoneModalOpen(false);
                    setNewPhone('');
                    setPhoneFocusedField(null);
                }}
                showCloseButton={false}
                closeOnOutsideClick={false}
                closeOnEsc={false}
                size="md"
                className="bg-[var(--slate-100,#f1f5f9)] p-8"
            >
                <div className="flex flex-col gap-8 items-start w-full">
                    {/* Header */}
                    <div className="flex gap-8 items-start w-full">
                        <h2 className="flex-1 font-['Inter',sans-serif] font-semibold text-[20px] text-[color:var(--slate-900,#0f172b)] whitespace-pre-wrap">
                            Telefon Numaranızı Değiştirin
                        </h2>
                        <button
                            onClick={() => {
                                setIsPhoneModalOpen(false);
                                setNewPhone('');
                                setPhoneFocusedField(null);
                            }}
                            className="relative shrink-0 size-5 hover:opacity-70 transition-opacity cursor-pointer"
                            aria-label="Kapat"
                        >
                            <FiX className="size-full text-[color:var(--slate-900,#0f172b)]" />
                        </button>
                    </div>

                    {/* Form */}
                    <div className="flex flex-col gap-8 items-start w-full">
                        {/* Phone Input */}
                        <div className="flex flex-col gap-3 items-start w-full">
                            <div className="flex items-center justify-center px-3 py-0 shrink-0">
                                <label className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-900,#0f172b)]">
                                    Yeni Telefon Numaranız
                                </label>
                            </div>
                            <div className={`bg-white border border-solid flex h-[52px] items-center overflow-clip px-4 py-3 rounded-[16px] w-full transition-all ${phoneFocusedField === 'phone'
                                ? 'border-[1.5px] border-[color:var(--slate-900,#0f172b)]'
                                : 'border border-[color:var(--slate-200,#e2e8f0)]'
                                }`}>
                                <input
                                    type="text"
                                    value={newPhone}
                                    onChange={handlePhoneChange}
                                    onFocus={() => setPhoneFocusedField('phone')}
                                    onBlur={() => setPhoneFocusedField(null)}
                                    placeholder="+90 555 555 55 55"
                                    className="font-['Inter',sans-serif] font-normal text-[15px] text-[color:var(--slate-900,#0f172b)] bg-transparent outline-none w-full"
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* Save Button */}
                        <button
                            onClick={handlePhoneSave}
                            disabled={isSavingPhone || !newPhone}
                            className="bg-[var(--primary,#ff6900)] flex h-[52px] items-center justify-center px-6 rounded-[32px] w-full hover:bg-[#e55a00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="font-['Inter',sans-serif] font-bold text-[15px] text-white leading-normal">
                                {isSavingPhone ? 'Kaydediliyor...' : 'Kaydet'}
                            </span>
                        </button>
                    </div>
                </div>
            </ModalComponent>

            {/* OTP Verification Modal */}
            <ModalComponent
                isOpen={isOTPModalOpen}
                onClose={() => {
                    setIsOTPModalOpen(false);
                    setOtpCode('');
                    setPendingPhone('');
                    setResendTimer(0);
                }}
                showCloseButton={false}
                closeOnOutsideClick={false}
                closeOnEsc={false}
                size="md"
                className="bg-[var(--slate-100,#f1f5f9)] p-8"
            >
                <div className="flex flex-col gap-8 items-start w-full">
                    {/* Header */}
                    <div className="flex gap-8 items-start w-full">
                        <h2 className="flex-1 font-['Inter',sans-serif] font-semibold text-[20px] text-[color:var(--slate-900,#0f172b)] whitespace-pre-wrap">
                            Numaranızı Doğrulayın
                        </h2>
                        <button
                            onClick={() => {
                                setIsOTPModalOpen(false);
                                setOtpCode('');
                                setOtpFocusedField(null);
                                setPendingPhone('');
                                setResendTimer(0);
                            }}
                            className="relative shrink-0 size-5 hover:opacity-70 transition-opacity cursor-pointer"
                            aria-label="Kapat"
                        >
                            <FiX className="size-full text-[color:var(--slate-900,#0f172b)]" />
                        </button>
                    </div>

                    {/* Form */}
                    <div className="flex flex-col gap-8 items-start w-full">
                        <div className="flex flex-col gap-6 items-start w-full">
                            {/* Phone Number Info */}
                            <div className="text-center w-full">
                                <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[color:var(--slate-600,#45556c)]">
                                    <span className="font-['Inter',sans-serif] font-semibold text-[color:var(--slate-900,#0f172b)]">
                                        {pendingPhone ? formatPhone(pendingPhone) : ''}
                                    </span>{' '}
                                    numarasına gönderilen 6 haneli doğrulama kodunu giriniz.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsOTPModalOpen(false);
                                        setIsPhoneModalOpen(true);
                                        setOtpCode('');
                                        setResendTimer(0);
                                    }}
                                    className="mt-2 font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--primary,#ff6900)] hover:text-[#e55a00] underline transition-colors"
                                >
                                    Numarayı Değiştir
                                </button>
                            </div>

                            {/* OTP Input */}
                            <div className="w-full flex justify-center">
                                <OTPInput
                                    value={otpCode}
                                    onChange={setOtpCode}
                                    length={6}
                                    disabled={isVerifyingOTP}
                                />
                            </div>

                            {/* Resend Timer */}
                            <div className="text-center w-full">
                                <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[color:var(--slate-600,#45556c)]">
                                    Kod gelmedi mi?{' '}
                                    {resendTimer > 0 ? (
                                        <span className="font-['Inter',sans-serif] font-medium text-[color:var(--primary,#ff6900)]">
                                            {resendTimer} saniye sonra tekrar gönder
                                        </span>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleResendOTP}
                                            disabled={isVerifyingOTP}
                                            className="font-['Inter',sans-serif] font-medium text-[14px] text-[color:var(--primary,#ff6900)] hover:text-[#e55a00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            Tekrar gönder
                                        </button>
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Save Button */}
                        <button
                            onClick={handleVerifyOTP}
                            disabled={isVerifyingOTP || !otpCode || otpCode.length !== 6}
                            className="bg-[var(--primary,#ff6900)] flex h-[52px] items-center justify-center px-6 rounded-[32px] w-full hover:bg-[#e55a00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="font-['Inter',sans-serif] font-bold text-[15px] text-white leading-normal">
                                {isVerifyingOTP ? 'Doğrulanıyor...' : 'Kaydet'}
                            </span>
                        </button>
                    </div>
                </div>
            </ModalComponent>

            {/* Delete Account Section */}
            <div className="bg-white rounded-[24px] shadow-sm p-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="font-['Inter',sans-serif] font-medium text-[16px] text-[color:var(--slate-900,#0f172b)] mb-2">
                            Hesabımı Sil
                        </h2>
                        <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[color:var(--slate-600,#45556c)]">
                            Hesabınızı silmek istediğinizde hesabınız askıya alınacak ve tekrar giriş yapamayacaksınız.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsDeleteModalOpen(true)}
                        className="bg-red-500 hover:bg-red-600 text-white font-['Inter',sans-serif] font-medium text-[14px] px-6 py-3 rounded-[16px] transition-colors w-fit"
                    >
                        Hesabımı Sil
                    </button>
                </div>
            </div>

            {/* Delete Account Confirmation Modal */}
            <ModalComponent
                isOpen={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                }}
                showCloseButton={false}
                closeOnOutsideClick={false}
                closeOnEsc={false}
                size="md"
                className="bg-[var(--slate-100,#f1f5f9)] p-8"
            >
                <div className="flex flex-col gap-8 items-start w-full">
                    {/* Header */}
                    <div className="flex gap-8 items-start w-full">
                        <h2 className="flex-1 font-['Inter',sans-serif] font-semibold text-[20px] text-[color:var(--slate-900,#0f172b)] whitespace-pre-wrap">
                            Hesabınızı Silmek İstediğinize Emin misiniz?
                        </h2>
                        <button
                            onClick={() => setIsDeleteModalOpen(false)}
                            className="relative shrink-0 size-5 hover:opacity-70 transition-opacity cursor-pointer"
                            aria-label="Kapat"
                            disabled={isDeletingAccount}
                        >
                            <FiX className="size-full text-[color:var(--slate-900,#0f172b)]" />
                        </button>
                    </div>

                    {/* Warning Message */}
                    <div className="flex flex-col gap-4 items-start w-full">
                        <div className="bg-red-50 border border-red-200 rounded-[16px] p-4 w-full">
                            <p className="font-['Inter',sans-serif] font-normal text-[14px] text-red-800">
                                <strong>Dikkat:</strong> Bu işlem geri alınamaz. Hesabınız askıya alınacak ve:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1 font-['Inter',sans-serif] font-normal text-[13px] text-red-700">
                                <li>Tekrar giriş yapamayacaksınız</li>
                                <li>Tüm verileriniz korunacak ancak hesabınız aktif olmayacak</li>
                                <li>Hesabınızı geri almak için destek ekibiyle iletişime geçmeniz gerekecek</li>
                            </ul>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 items-center w-full">
                        <button
                            onClick={() => setIsDeleteModalOpen(false)}
                            disabled={isDeletingAccount}
                            className="flex-1 bg-white border border-[color:var(--slate-300,#cbd5e1)] text-[color:var(--slate-900,#0f172b)] flex h-[52px] items-center justify-center px-6 rounded-[32px] hover:bg-[color:var(--slate-50,#f8fafc)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="font-['Inter',sans-serif] font-bold text-[15px] leading-normal">
                                İptal
                            </span>
                        </button>
                        <button
                            onClick={handleDeleteAccount}
                            disabled={isDeletingAccount}
                            className="flex-1 bg-red-500 flex h-[52px] items-center justify-center px-6 rounded-[32px] hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="font-['Inter',sans-serif] font-bold text-[15px] text-white leading-normal">
                                {isDeletingAccount ? 'Siliniyor...' : 'Evet, Hesabımı Sil'}
                            </span>
                        </button>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}