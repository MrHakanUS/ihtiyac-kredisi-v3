'use client';

import LogoComponent from '@/components/common/LogoComponent';
import Link from 'next/link';
import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io5';

const socialMedia = [
  {
    icon: <IoLogoLinkedin />,
    link: 'https://www.linkedin.com/company/ihtiyackredisi-com',
    label: 'LinkedIn',
  },
];

function renderMonoZeroIfFaizli(text) {
  if (typeof text !== 'string') return text;
  const hasFaizliZero = /(\%?0)\s*faizli/i.test(text);
  if (!hasFaizliZero) return text;
  return text.split(/(0)/).map((part, i) =>
    part === '0' ? (
      <span key={i} className='font-mono'>
        0
      </span>
    ) : (
      part
    )
  );
}

const footerInfo = [];

// Hızlı Linkler: 3-3-2-2 şeklinde 4 sütun
const quickLinkColumns = [
  [
    { href: '/kredi-hesaplama', label: 'Kredi Hesaplama' },
    { href: '/faiz-hesaplama', label: 'Faiz Hesaplama' },
    { href: '/kredi-faiz-hesaplama', label: 'Kredi Faiz Hesaplama' },
  ],
  [
    { href: '/ev-kredisi-hesaplama', label: 'Ev Kredisi Hesaplama' },
    { href: '/ihtiyac-kredisi-hesaplama', label: 'İhtiyaç Kredisi Hesaplama' },
    { href: '/mevduat-faizi-hesaplama', label: 'Mevduat Faizi Hesaplama' },
  ],
  [
    { href: '/banka-faiz-oranlari', label: 'Banka Faiz Oranları' },
    { href: '/emekli-promosyonu', label: 'Emekli Promosyonu' },
  ],
  [
    { href: '/vadeli-mevduat', label: 'Vadeli Mevduat' },
    { href: '/arac-kredisi', label: 'Araç Kredisi' },
  ],
];

const FooterComponent = () => {
  return (
    <footer className='bg-white' role='contentinfo'>
      <div className='custom-container-1 flex flex-col mt-[80px] py-[24px] md:py-[40px] gap-y-[24px] md:gap-y-[32px]'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-y-[24px] md:gap-y-0 md:gap-x-[24px] text-center md:text-left'>
          <div className='flex flex-col w-full md:w-1/3 items-center md:items-start gap-y-[8px]'>
            <div className='flex flex-col gap-y-[16px] pb-[24px] mb-[24px] border-b border-slate-200 w-full items-center md:items-start'>
              <LogoComponent />
              <p className='text-slate-600 text-[14px] leading-[18px]'>
                En Uygun Kredi Hesaplama
              </p>
            </div>

            <address
              className='not-italic w-full'
              aria-label='İletişim Bilgileri'
            >
              <ul className='flex flex-col items-start gap-y-[16px] text-[14px] leading-[18px] text-slate-600'>
                <li className='flex items-center gap-x-[16px]'>
                  <span className='text-[18px] text-accent'>
                    <FiPhone />
                  </span>
                  <Link
                    href='tel:0850 302 47 90'
                    className='hover:text-accent transition-colors duration-300 inline-block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40'
                  >
                    0850 302 47 90
                  </Link>
                </li>
                <li className='flex items-center gap-x-[16px]'>
                  <span className='text-[18px] text-accent'>
                    <FiMail />
                  </span>
                  <Link
                    href='mailto:destek@ihtiyackredisi.com'
                    className='hover:text-accent transition-colors duration-300 inline-block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40'
                  >
                    destek@ihtiyackredisi.com
                  </Link>
                </li>
                <li className='flex items-center gap-x-[16px] text-center md:text-left'>
                  <span className='text-[20px] text-accent'>
                    <MdOutlineLocationOn />
                  </span>
                  <p>
                    Sinanpaşa Mah. Süleyman Seba Cad. No:14/5 Beşiktaş /
                    İstanbul
                  </p>
                </li>
              </ul>
            </address>
            <div
              className='mt-[16px] w-full'
              aria-label='Şirket ve Vergi Bilgileri'
            >
              <ul className='flex flex-col items-start gap-y-[12px] text-left'>
                <li className='flex items-start gap-x-[16px]'>
                  <p className='text-slate-900 font-medium text-[14px] leading-[18px] min-w-[140px]'>
                    Şirket Bilgileri
                  </p>
                  <p className='text-slate-600 text-[13px] leading-[16px] pt-[2px]'>
                    AK GİRİŞİM SİBER YAZILIM OTONOM A.Ş.
                  </p>
                </li>
                <li className='flex items-start gap-x-[16px]'>
                  <p className='text-slate-900 font-medium text-[14px] leading-[18px] min-w-[140px]'>
                    Mersis No
                  </p>
                  <p className='text-slate-600 text-[13px] leading-[16px] pt-[2px]'>
                    0011129552900001
                  </p>
                </li>
                <li className='flex items-start gap-x-[16px]'>
                  <p className='text-slate-900 font-medium text-[14px] leading-[18px] min-w-[140px]'>
                    Vergi Dairesi
                  </p>
                  <p className='text-slate-600 text-[13px] leading-[16px] pt-[2px]'>
                    Beşiktaş V.D. 0111295529
                  </p>
                </li>
                <li className='w-full pt-4'>
                  <ul
                    className='flex items-center gap-x-[12px] md:gap-x-[16px] justify-start flex-wrap w-full'
                    aria-label='Sertifikalar'
                  >
                    <li>
                      <img
                        src='/2.svg'
                        alt='KVKK'
                        className='h-[40px] md:h-[48px] w-auto object-contain'
                        loading='lazy'
                      />
                    </li>
                    <li>
                      <img
                        src='/3.svg'
                        alt='ISAE 3402'
                        className='h-[40px] md:h-[48px] w-auto object-contain'
                        loading='lazy'
                      />
                    </li>
                    <li>
                      <img
                        src='/4.svg'
                        alt='ISO 27001'
                        className='h-[40px] md:h-[48px] w-auto object-contain'
                        loading='lazy'
                      />
                    </li>
                    <li>
                      <img
                        src='/ssl.webp'
                        alt='SSL'
                        className='h-[40px] md:h-[48px] w-auto object-contain'
                        loading='lazy'
                      />
                    </li>
                    <li>
                      <img
                        src='/bddk.svg'
                        alt='BDDK'
                        className='h-[40px] md:h-[48px] w-auto object-contain'
                        loading='lazy'
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className='w-full md:w-2/3 flex flex-col gap-y-[32px] text-center md:text-left'>
            {/* Üst Bloklar: Kurumsal - Şeffaflık & Güven - Bilgi Bankası */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-[16px] gap-y-[32px] text-left'>
              {/* Kurumsal */}
              <div className='flex flex-col items-start md:col-span-1'>
                <h3 className='text-slate-900 font-semibold text-[15px] leading-[18px] pb-[8px] border-b-2 border-primary w-full mb-[16px]'>
                  Kurumsal
                </h3>
                <ul className='text-slate-600 text-[14px] leading-[18px] flex flex-col gap-y-[12px] items-start'>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/hakkimizda'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      Hakkımızda
                    </Link>
                  </li>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/iletisim'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      İletişim
                    </Link>
                  </li>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='https://maps.app.goo.gl/t6RjttmXv184pRx27'
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      Adresimiz
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Şeffaflık & Güven (eski adıyla Yasal) - Altın Blok */}
              <div className='flex flex-col items-start rounded-lg md:col-span-3'>
                <h3 className='text-slate-900 font-semibold text-[15px] leading-[18px] pb-[8px] border-b-2 border-primary w-full mb-[16px]'>
                  Şeffaflık &amp; Güven
                </h3>
                <ul className='text-slate-600 text-[14px] leading-[18px] grid grid-cols-2 gap-x-[16px] gap-y-[12px] text-left w-full'>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/yasal/gizlilik-politikasi'
                      className='inline-block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary !text-left break-words hyphens-auto'
                    >
                      Gizlilik Politikası
                    </Link>
                  </li>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/yasal/sorumluluk-reddi'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      Çekince ve Sorumluluğun Reddi
                    </Link>
                  </li>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/yasal/cerez-acik-riza-metni'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      Çerez Açık Rıza Metni
                    </Link>
                  </li>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/yasal/cerez-aydinlatma-metni'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      Çerez Aydınlatma Metni
                    </Link>
                  </li>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/yasal/ilgili-kisi-basvuru-formu'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      İlgili Kişi Başvuru Formu
                    </Link>
                  </li>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/yasal/kvkk'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      KVKK Ziyaretçi Aydınlatma Metni
                    </Link>
                  </li>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.showCookiePreferences) {
                          window.showCookiePreferences();
                        }
                      }}
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words text-left w-full'
                    >
                      Çerez Tercihleri
                    </button>
                  </li>
                </ul>
              </div>

              {/* Bilgi Bankası */}
              <div className='flex flex-col items-start md:col-span-1'>
                <h3 className='text-slate-900 font-semibold text-[15px] leading-[18px] pb-[8px] border-b-2 border-primary w-full mb-[16px]'>
                  Bilgi Bankası
                </h3>
                <ul className='text-slate-600 text-[14px] leading-[18px] flex flex-col gap-y-[12px] items-start'>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/sikca-sorulan-sorular'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      Sıkça Sorulan Sorular
                    </Link>
                  </li>
                  <li className='hover:text-primary transition-all duration-300 ease-in-out w-full'>
                    <Link
                      href='/blog'
                      className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words'
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Alt Blok: Finansal Araçlar (eski adıyla Hızlı Linkler) */}
            <div className='flex flex-col items-start w-full'>
              <h3
                id='quick-links-heading'
                className='text-slate-900 font-semibold text-[15px] leading-[18px] pb-[8px] border-b-2 border-primary w-full mb-[16px] text-left'
              >
                Finansal Araçlar
              </h3>
              <nav aria-labelledby='quick-links-heading' className='w-full'>
                <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-[16px] gap-y-[24px]'>
                  {quickLinkColumns.map((col, cIdx) => (
                    <ul
                      key={cIdx}
                      className='text-slate-600 text-[14px] leading-[18px] flex flex-col gap-y-[8px] items-start'
                    >
                      {col.map(({ href, label }) => (
                        <li
                          key={href}
                          className='hover:text-primary transition-all duration-300 ease-in-out'
                        >
                          <Link
                            href={href}
                            className='block py-1 px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:text-primary break-words !text-left'
                          >
                            {renderMonoZeroIfFaizli(label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>

        <aside className='flex items-center justify-center md:justify-between flex-col md:flex-row gap-y-[16px] text-center md:text-left border-t border-slate-200 pt-[24px]'>
          <p className='text-slate-600 text-[14px] leading-[18px]'>
            © 2026 ihtiyackredisi.com
            <br />
            Bu site bankalarla doğrudan kredi sözleşmesi yapmaz; bilgilendirme ve
            karşılaştırma hizmeti sunar.
          </p>
          <div className='w-full md:w-auto'>
            <ul className='flex items-center gap-x-[24px] text-[20px] justify-center md:justify-start'>
              {socialMedia.map(({ icon, link, label }, index) => {
                return (
                  <li key={link + index}>
                    <Link
                      href={link}
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                      aria-label={label}
                      className='text-slate-600 hover:text-primary cursor-pointer transition-all duration-300 p-2 -m-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'
                    >
                      {icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default FooterComponent;
