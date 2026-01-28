'use client';

import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

/**
 * Reusable Modal Component
 * @param {boolean} isOpen - Modal'ın açık/kapalı durumu
 * @param {function} onClose - Modal'ı kapatma fonksiyonu
 * @param {React.ReactNode} children - Modal içeriği
 * @param {boolean} showCloseButton - Kapatma butonunu göster/gizle (default: true)
 * @param {boolean} closeOnOutsideClick - Dışarı tıklanınca kapat (default: true)
 * @param {boolean} closeOnEsc - ESC tuşuna basılınca kapat (default: true)
 * @param {string} className - Modal container'a eklenecek class'lar
 * @param {string} overlayClassName - Overlay'e eklenecek class'lar
 * @param {string} contentClassName - İçerik container'a eklenecek class'lar
 * @param {string} size - Modal boyutu ('sm', 'md', 'lg', 'xl', 'full') (default: 'md')
 */
export default function ModalComponent({
  isOpen,
  onClose,
  children,
  title,
  showCloseButton = true,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  className = '',
  overlayClassName = '',
  contentClassName = '',
  size = 'md'
}) {
  // ESC tuşu ile kapatma
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, closeOnEsc]);

  // Modal açıkken body scroll'u engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Modal kapalıysa render etme
  if (!isOpen) return null;

  // Boyut sınıflarını belirle
  const sizeClasses = {
    sm: 'max-w-[400px]',
    md: 'max-w-[560px]',
    lg: 'max-w-[768px]',
    xl: 'max-w-[1024px]',
    full: 'max-w-[95vw]',
    custom: 'max-w-[720px]' // ReviewsModal için özel boyut
  };

  const selectedSizeClass = sizeClasses[size] || sizeClasses.md;

  // Dışarı tıklama handler
  const handleOutsideClick = (e) => {
    if (closeOnOutsideClick) {
      onClose();
    }
  };

  // İçerik tıklama handler (event propagation'ı durdur)
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={`fixed inset-0 bg-slate-600/50 flex items-center justify-center z-50 px-4 ${overlayClassName}`}
      onClick={handleOutsideClick}
    >
      <div 
        className={`bg-white rounded-[32px] p-[32px] w-full relative ${selectedSizeClass} ${className}`}
        onClick={handleContentClick}
      >
        {/* Kapatma butonu */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className='absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer'
            aria-label='Kapat'
          >
            <IoClose className='w-6 h-6' />
          </button>
        )}

        {/* Modal başlığı */}
        {title && (
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pr-8">
            {title}
          </h2>
        )}

        {/* Modal içeriği */}
        <div className={contentClassName}>
          {children}
        </div>
      </div>
    </div>
  );
}
