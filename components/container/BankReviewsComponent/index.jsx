'use client';

import React from 'react';
import FeaturedButtonComponent from '../../common/FeaturedButtonComponent';
import { FaStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import ModalComponent from '../../common/ModalComponent';
import { resolveBankBySlug } from '@/constants/banks';

// Genel değerlendirme satırı bileşeni
function OverallRatingRow({ label, rating, color }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`h-[16px] w-[16px] ${
          i < Math.floor(rating) ? color : 'text-gray-300'
        }`}
      />
    );
  }

  return (
    <div className='flex items-center justify-between'>
      <span className='text-[14px] font-semibold leading-[18px] text-slate-900'>
        {label}
      </span>
      <div className='flex items-center gap-3'>
        <div className='flex gap-1'>{stars}</div>
        <span className='min-w-[28px] text-right text-[14px] font-semibold text-slate-900'>
          {rating.toFixed(1).replace('.', ',')}
        </span>
      </div>
    </div>
  );
}

// Kullanıcı yorumu bileşeni
function UserReview({ username, comment, ratings }) {
  return (
    <div className='rounded-[20px] border border-slate-200 p-[20px] overflow-hidden'>
      {/* Kullanıcı adı ve onay işareti */}
      <div className='mb-[16px] flex items-center gap-2'>
        <span className='text-[14px] text-slate-600'>{username}</span>
        <MdVerified className='h-[18px] w-[18px] text-blue-500' />
      </div>

      {/* Yorum metni */}
      <p className='mb-[16px] text-[14px] leading-[20px] text-slate-900 break-words'>
        {comment}
      </p>

      {/* Değerlendirme kategorileri */}
      <div className='flex flex-col gap-y-[12px] md:grid md:grid-cols-3 md:gap-y-0 md:gap-x-[32px] w-full min-w-0'>
        <div className='flex flex-row items-center justify-between w-full min-w-0'>
          <span className='text-[13px] font-semibold leading-4 text-slate-900'>
            Kredi Verme Durumu
          </span>
          <div className='flex items-center gap-2'>
            <FaStar
              className={`h-[14px] w-[14px] ${
                ratings.creditApproval >= 4
                  ? 'text-lime-500'
                  : ratings.creditApproval <= 1
                  ? 'text-red-500'
                  : 'text-amber-500'
              }`}
            />
            <span className='text-[13px] font-semibold leading-4 text-slate-900'>
              {ratings.creditApproval}
            </span>
          </div>
        </div>

        <div className='flex flex-row items-center justify-between w-full min-w-0'>
          <span className='text-[13px] font-semibold leading-4 text-slate-900'>
            İletişim
          </span>
          <div className='flex items-center gap-2'>
            <FaStar
              className={`h-[14px] w-[14px] ${
                ratings.communication >= 4
                  ? 'text-lime-500'
                  : ratings.communication <= 1
                  ? 'text-red-500'
                  : 'text-amber-500'
              }`}
            />
            <span className='text-[13px] font-semibold leading-4 text-slate-900'>
              {ratings.communication}
            </span>
          </div>
        </div>

        <div className='flex flex-row items-center justify-between w-full min-w-0'>
          <span className='text-[13px] font-semibold leading-4 text-slate-900'>
            Müşteri Memnuniyeti
          </span>
          <div className='flex items-center gap-2'>
            <FaStar
              className={`h-[14px] w-[14px] ${
                ratings.security >= 4
                  ? 'text-lime-500'
                  : ratings.security <= 1
                  ? 'text-red-500'
                  : 'text-amber-500'
              }`}
            />
            <span className='text-[13px] font-semibold leading-4 text-slate-900'>
              {ratings.security}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BankReviewsComponent({ bankSlug }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [ratings, setRatings] = React.useState({
    creditApproval: 0,
    communication: 0,
    security: 0,
  });
  const [hoverRatings, setHoverRatings] = React.useState({
    creditApproval: 0,
    communication: 0,
    security: 0,
  });
  const [comment, setComment] = React.useState('');

  const { bank } = resolveBankBySlug({ slug: bankSlug });
  const fallbackOverallRatings = {
    creditApproval: {
      label: 'Kredi Yanıt Süresi',
      rating: 4.0,
      color: 'text-lime-500',
    },
    communication: {
      label: 'Bankayla İletişim Kolaylığı',
      rating: 4.0,
      color: 'text-lime-500',
    },
    security: {
      label: 'Müşteri Memnuniyeti',
      rating: 4.0,
      color: 'text-lime-500',
    },
  };
  const overallRating = bank?.reviews?.overallRating ?? 4.0;
  const overallRatings =
    bank?.reviews?.overallRatings || fallbackOverallRatings;
  const userReviews =
    Array.isArray(bank?.reviews?.userReviews) &&
    bank.reviews.userReviews.length > 0
      ? bank.reviews.userReviews
      : [
          {
            username: 'A*** B***',
            comment:
              'Süreç hızlı ve anlaşılırdı. Dijital kanallar üzerinden rahatça ilerledim.',
            ratings: { creditApproval: 4, communication: 4, security: 4 },
          },
        ];

  return (
    <div className='text-gray-700 w-full border border-slate-200 bg-white p-[24px] rounded-[24px]'>
      <div className='w-full'>
        <div className='flex w-full items-start justify-between flex-col lg:flex-row gap-[24px]'>
          <div className='flex items-center gap-[16px] sm:gap-[24px] lg:gap-[32px] w-full lg:w-auto'>
            <div className='flex min-h-[104px] min-w-[104px] flex-col items-center justify-center rounded-[20px] bg-green-500 px-[20px] py-[16px] gap-y-[8px]'>
              <div className='text-[24px] font-bold leading-[29px] text-white'>
                {overallRating.toFixed(1).replace('.', ',')}
              </div>
              <div className='flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className='h-5 w-5 text-white' />
                ))}
              </div>
              <div className='text-[11px] text-white/90 mt-[4px]'>
                {userReviews.length} değerlendirme
              </div>
            </div>
            <div className='flex-1 space-y-[12px] sm:space-y-[16px]'>
              <p className='text-[14px] font-semibold leading-[18px] text-slate-900'>
                {overallRatings.creditApproval.label}
              </p>
              <p className='text-[14px] font-semibold leading-[18px] text-slate-900'>
                {overallRatings.communication.label}
              </p>
              <p className='text-[14px] font-semibold leading-[18px] text-slate-900'>
                {overallRatings.security.label}
              </p>
            </div>
          </div>
          <div className='flex h-full flex-row gap-x-[24px] sm:gap-x-[32px] lg:gap-x-[48px] items-center justify-between w-full lg:w-auto'>
            <div className='flex flex-col items-end gap-y-3 sm:gap-y-4 w-full'>
              <div className='flex items-center gap-3'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-[16px] w-[16px] ${
                        i < Math.floor(overallRatings.creditApproval.rating)
                          ? overallRatings.creditApproval.color
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className='min-w-[28px] text-right text-[14px] font-semibold text-slate-900'>
                  {overallRatings.creditApproval.rating
                    .toFixed(1)
                    .replace('.', ',')}
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-[16px] w-[16px] ${
                        i < Math.floor(overallRatings.communication.rating)
                          ? overallRatings.communication.color
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className='min-w-[28px] text-right text-[14px] font-semibold text-slate-900'>
                  {overallRatings.communication.rating
                    .toFixed(1)
                    .replace('.', ',')}
                </span>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-[16px] w-[16px] ${
                        i < Math.floor(overallRatings.security.rating)
                          ? overallRatings.security.color
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className='min-w-[28px] text-right text-[14px] font-semibold text-slate-900'>
                  {overallRatings.security.rating.toFixed(1).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* <FeaturedButtonComponent
              text='Yeni Yorum Yaz'
              buttonColor='accent'
              className='w-full lg:w-auto'
              addClass='w-full lg:w-auto justify-center min-h-[44px] py-[13px] text-[14px] font-bold'
              onClick={() => setIsModalOpen(true)}
            /> */}
          </div>
        </div>
      </div>
      <div className='mt-[32px] flex flex-col gap-y-[16px]'>
        {userReviews.map((review, index) => (
          <UserReview key={index} {...review} />
        ))}
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size='custom'
        className='px-[24px] !bg-slate-50'
      >
        <div className='w-full'>
          <div className='border-b border-b-slate-200 pb-[16px]'>
            <h2 className='text-[20px] font-semibold text-slate-900 text-center leading-[24px]'>
              Garanti BBVA için Yorum Yazın
            </h2>
          </div>

          <div className='mt-[32px] rounded-[20px] px-[24px] border border-slate-200'>
            {[
              { key: 'creditApproval', label: 'Olumlu Geri Dönüş' },
              { key: 'communication', label: 'Başvuruya Cevap Verme Hızı' },
              { key: 'security', label: 'Müşteri Memnuniyeti' },
            ].map((c, idx, arr) => (
              <div
                key={c.key}
                className={`flex items-center justify-between py-[20px] ${
                  idx !== arr.length - 1 ? 'border-b border-slate-200' : ''
                }`}
              >
                <span className='text-slate-900 font-semibold text-[16px] leading-[20px]'>
                  {c.label}
                </span>
                {(() => {
                  const current = hoverRatings[c.key] || ratings[c.key] || 0;
                  const fillCount = current;
                  const activeColor =
                    current >= 4
                      ? 'text-lime-500'
                      : current >= 2
                      ? 'text-amber-500'
                      : current >= 1
                      ? 'text-red-500'
                      : 'text-gray-300';

                  return (
                    <div
                      className='flex items-center gap-[8px]'
                      onMouseLeave={() =>
                        setHoverRatings((p) => ({ ...p, [c.key]: 0 }))
                      }
                    >
                      {[1, 2, 3, 4, 5].map((v) => (
                        <button
                          key={v}
                          type='button'
                          onMouseEnter={() =>
                            setHoverRatings((p) => ({ ...p, [c.key]: v }))
                          }
                          onClick={() =>
                            setRatings((p) => ({ ...p, [c.key]: v }))
                          }
                          className='outline-none cursor-pointer'
                          aria-label={`${c.label} ${v} yıldız`}
                        >
                          <FaStar
                            className={`w-[24px] h-[24px] transition-colors duration-200 ${
                              v <= fillCount ? activeColor : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  );
                })()}
              </div>
            ))}
          </div>

          <div className='mt-[32px] pt-[32px] pb-[32px] border-y mb-[32px] border-slate-200'>
            <label className='text-[14px] text-slate-900 leading-[18px] pl-[16px]'>
              Yorumunuzu Yazın
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Yorumunuzu yazınız...'
              className='bg-white resize-none w-full px-[20px] py-[16px] rounded-[16px] outline-none mt-[16px] min-h-[120px] text-[14px] font-medium text-slate-900 leading-[18px] text-scroll border border-slate-200'
            />
          </div>

          <div className=''>
            <FeaturedButtonComponent
              text='Yorumu Gönder'
              buttonColor='primary'
              className='w-full'
              addClass='w-full justify-center min-h-[52px] py-[13px] text-[14px] font-bold'
              onClick={() => setIsModalOpen(false)}
            />
            <p className='mt-[32px] text-center text-[14px] leading-[18px] text-slate-900'>
              Yorumunuzda güvenlik ve gizliliğiniz için adınız sansürlü bir
              şekilde görünecektir.
            </p>
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}

export default BankReviewsComponent;
