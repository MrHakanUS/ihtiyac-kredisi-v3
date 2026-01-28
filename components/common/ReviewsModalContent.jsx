'use client';

import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';


// Yıldız bileşeni - renk ve durum kontrolü için
const StarRating = ({ rating, color }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`w-[14px] h-[14px] ${i < rating ? color : 'text-gray-300'}`}
      />
    );
  }
  return <div className='flex gap-[3px]'>{stars}</div>;
};

// Genel değerlendirme satırı bileşeni
const OverallRatingRow = ({ label, rating, color }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] ${i < Math.floor(rating) ? color : 'text-gray-300'}`}
      />
    );
  }

  return (
    <div className='flex items-center justify-between py-2'>
      <span className='text-[13px] sm:text-[14px] text-slate-900 font-semibold leading-[16px] sm:leading-[18px] flex-1 pr-2'>{label}</span>
      <div className='flex items-center gap-2 sm:gap-3 flex-shrink-0'>
        <div className='flex gap-1'>{stars}</div>
        <span className='text-[13px] sm:text-[14px] font-semibold text-slate-900 min-w-[24px] sm:min-w-[28px] text-right'>
          {rating.toFixed(1).replace('.', ',')}
        </span>
      </div>
    </div>
  );
};

// Kullanıcı yorumu bileşeni
const UserReview = ({ username, comment, ratings }) => {
  return (
    <div className='rounded-[16px] sm:rounded-[20px] border border-slate-200 p-[16px] sm:p-[20px]'>
      {/* Kullanıcı adı ve onay işareti */}
      <div className='flex items-center gap-2 mb-[12px] sm:mb-[16px]'>
        <span className='text-[13px] sm:text-[14px] text-slate-600'>{username}</span>
        <MdVerified className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-blue-500' />
      </div>

      {/* Yorum metni */}
      <p className='text-[13px] sm:text-[14px] text-slate-900 leading-[18px] sm:leading-[20px] mb-[12px] sm:mb-[16px] break-words'>
        {comment}
      </p>

      {/* Değerlendirme kategorileri */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-y-[12px] sm:gap-x-[24px] md:gap-x-[32px] flex-wrap'>
        <div className='flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-4'>
          <span className='text-[13px] font-semibold leading-4 text-slate-900'>Kredi Verme Durumu</span>
          <div className='flex items-center gap-2'>
            <FaStar 
              className={`w-[14px] h-[14px] ${ratings.creditApproval >= 4 ? 'text-lime-500' : ratings.creditApproval <= 1 ? 'text-red-500' : 'text-amber-500'}`}
            />
            <span className='text-[13px] font-semibold leading-4 text-slate-900'>
              {ratings.creditApproval}
            </span>
          </div>
        </div>

        <div className='flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-4'>
          <span className='text-[13px] font-semibold leading-4 text-slate-900'>İletişim</span>
          <div className='flex items-center gap-2'>
            <FaStar 
              className={`w-[14px] h-[14px] ${ratings.communication >= 4 ? 'text-lime-500' : ratings.communication <= 1 ? 'text-red-500' : 'text-amber-500'}`}
            />
            <span className='text-[13px] font-semibold leading-4 text-slate-900'>
              {ratings.communication}
            </span>
          </div>
        </div>

        <div className='flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-4'>
          <span className='text-[13px] font-semibold leading-4 text-slate-900'>Güvenlik</span>
          <div className='flex items-center gap-2'>
            <FaStar 
              className={`w-[14px] h-[14px] ${ratings.security >= 4 ? 'text-lime-500' : ratings.security <= 1 ? 'text-red-500' : 'text-amber-500'}`}
            />
            <span className='text-[13px] font-semibold leading-4 text-slate-900'>
              {ratings.security}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewsModalContent = ({ title = 'Garanti BBVA', overallRating, overallRatings, userReviews }) => {
  // Props ile gelen veriler yoksa mantıklı varsayılanlara düş
  const effectiveOverallRating = typeof overallRating === 'number' ? overallRating : 4.8;

  const effectiveOverallRatings = overallRatings || {
    creditApproval: { label: 'Olumlu Geri Dönüş', rating: 4.1, color: 'text-lime-500' },
    communication: { label: 'Başvuruya Cevap Verme Hızı', rating: 2.9, color: 'text-amber-500' },
    security: { label: 'Kredi Kullandırma Kolaylığı', rating: 1.0, color: 'text-red-500' }
  };

  const effectiveUserReviews = Array.isArray(userReviews) && userReviews.length > 0 ? userReviews : [
    {
      username: 'R*** A***',
      comment: 'Taşıt kredisi başvurum için bu bankayı tercih ettim. Faiz oranları çok uygun, dosya işlemleri hızlı halloldu. Araç ekspertizi de bankanın anlaşmalı yerinde yaptırdım, sorun çıkmadı. Müşteri danışmanı sürekli bilgi verdi, çok memnun kaldım.',
      ratings: {
        creditApproval: 4,
        communication: 5,
        security: 4
      }
    },
    {
      username: 'N*** T***',
      comment: 'Ev kredisi için uzun araştırma yaptım, en uygun teklifi buradan aldım. Şube müdürü bizzat ilgilendi, tüm seçenekleri anlattı. Sigorta ve noter işlemleri de koordine ettiler. Kesinlikle tavsiye ederim, profesyonel bir hizmet.',
      ratings: {
        creditApproval: 5,
        communication: 4,
        security: 5
      }
    }
  ];

  return (
    <div className='w-full max-h-[85vh] flex flex-col overflow-hidden'>
      {/* Başlık */}
      <div className='border-b border-b-slate-200 pb-[16px] flex-shrink-0'>
        <h2 className='text-[20px] font-semibold text-slate-900 text-center leading-[24px]'>
          {title}
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className='overflow-y-auto flex-1'>
        {/* Genel Değerlendirmeler Bölümü */}
        <div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[32px] py-[24px] sm:py-[32px] border-b border-b-slate-200 mb-[24px] sm:mb-[32px] w-full'>
          {/* Sol: Genel Puan */}
          <div className='bg-green-500 rounded-[20px] px-[20px] py-[16px] sm:py-[20px] flex flex-col items-center justify-center flex-shrink-0 sm:w-auto w-full gap-y-[8px]'>
            <div className='text-white text-[24px] font-bold leading-[29px]'>
              {effectiveOverallRating.toFixed(1).replace('.', ',')}
            </div>
            <div className='flex gap-1'>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className='w-4 h-4 sm:w-5 sm:h-5 text-white' />
              ))}
            </div>
            <div className='text-[11px] text-white/90 mt-[4px]'>
              {effectiveUserReviews.length} değerlendirme
            </div>
          </div>

          {/* Sağ: Değerlendirme Kriterleri */}
          <div className='flex-1 space-y-2 sm:space-y-3 w-full'>
          <OverallRatingRow
            label={effectiveOverallRatings.creditApproval.label}
            rating={effectiveOverallRatings.creditApproval.rating}
            color={effectiveOverallRatings.creditApproval.color}
          />
          <OverallRatingRow
            label={effectiveOverallRatings.communication.label}
            rating={effectiveOverallRatings.communication.rating}
            color={effectiveOverallRatings.communication.color}
          />
          <OverallRatingRow
            label={effectiveOverallRatings.security.label}
            rating={effectiveOverallRatings.security.rating}
            color={effectiveOverallRatings.security.color}
          />
        </div>
      </div>

        {/* Kullanıcı Yorumları */}
        <div className='flex gap-y-[16px] flex-col mb-[24px] sm:mb-[32px]'>
          {effectiveUserReviews.map((review, index) => (
            <UserReview key={index} {...review} />
          ))}
        </div>

        {/* Alt Buton */}
        {/* <Link href='/kayit-ol' className='w-full text-center bg-primary hover:brightness-125 transition-all py-[13px] px-[20px] rounded-full duration-300 font-bold text-[14px] text-white leading-[18px] min-h-[44px] flex items-center justify-center'>
          Daha Fazlasını Görmek ve Yorum Yazmak için Üye Ol
        </Link> */}
      </div>
    </div>
  );
};

export default ReviewsModalContent;
