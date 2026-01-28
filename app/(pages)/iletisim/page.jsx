import BreadcrumbComponent from '@/components/common/BreadcrumbComponent';
import FeaturedButtonComponent from '@/components/common/FeaturedButtonComponent';
import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import CORE from '@/CORE2';

export async function generateMetadata() {
  const metadata = CORE['/iletisim'];
  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: '/iletisim',
    },
  };
}

export default function IletisimPage() {
  return (
    <main className='custom-container-1 pt-[40px] md:pt-[56px]'>
      <section className='relative grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[56px]'>
        <div className='flex flex-col'>
          <BreadcrumbComponent
            items={[
              { label: 'ihtiyackredisi.com', href: '/' },
              { label: 'İletişim' },
            ]}
            addClass='!mb-[16px]'
          />
          <div className='flex flex-col gap-y-[24px]'>
            <h1 className='font-semibold text-slate-900 text-[24px] leading-[32px] md:text-[32px] md:leading-[40px]'>
              İletişim
            </h1>
            <p className='text-slate-600 text-[14px] leading-[20px] md:text-[16px] md:leading-[22px]'>
              Hayatınızı kolaylaştıracak en uygun kredi seçeneklerini bulmanız
              için buradayız. Kredi faizleri, başvuru süreçleri veya diğer tüm
              finansal ihtiyaçlarınız hakkında aklınıza takılan soruları bize
              iletebilirsiniz.
            </p>
          </div>

          <ul className='flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[40px] py-[32px] md:py-[64px]'>
            <li className='flex items-center gap-x-[16px]'>
              <span className='flex items-center justify-center rounded-[12px] bg-primary text-white text-[18px] w-[40px] h-[40px]'>
                <FiPhone />
              </span>
              <div className='flex flex-col gap-y-[8px]'>
                <span className='text-slate-600 text-[13px] leading-[16px]'>
                  Telefon Numaramız
                </span>
                <a
                  href='tel:0850 302 47 90'
                  className='text-slate-900 font-semibold text-[15px] leading-[20px] break-words'
                >
                  0 (850) 302 47 90
                </a>
              </div>
            </li>
            <li className='flex items-center gap-x-[16px]'>
              <span className='flex items-center justify-center rounded-[12px] bg-primary text-white text-[18px] w-[40px] h-[40px]'>
                <FiMail />
              </span>
              <div className='flex flex-col gap-y-[8px]'>
                <span className='text-slate-600 text-[13px] leading-[16px]'>
                  E-Posta Adresimiz
                </span>
                <a
                  href='mailto:destek@ihtiyackredisi.com'
                  className='text-slate-900 font-semibold text-[15px] leading-[20px] break-words'
                >
                  destek@ihtiyackredisi.com
                </a>
              </div>
            </li>
          </ul>

          <div className='flex flex-col gap-y-[20px]'>
            <h2 className='text-[18px] font-semibold leading-[22px] text-slate-900'>
              Kurumsal Bilgilerimiz
            </h2>
            <div className='relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-y-[8px] md:gap-y-[12px] md:gap-x-[24px] pt-[8px]'>
              <span
                aria-hidden
                className='pointer-events-none hidden md:block absolute left-[160px] top-0 bottom-0 border-l border-dashed border-slate-200'
              />
              {CORPORATE_INFO.map(({ label, value }) => (
                <React.Fragment key={label}>
                  <p className='text-slate-600 text-[13px] leading-[16px]'>
                    {label}
                  </p>
                  <p className='text-slate-900 text-[13px] leading-[16px]'>
                    {value}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-[32px]'>
          <div className='flex flex-col gap-y-[24px]'>
            <div className='flex flex-col gap-y-[16px]'>
              <h2 className='text-slate-900 text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-semibold'>
                Ofis Adresimiz
              </h2>
              <div className='w-full h-[280px] md:h-[320px] rounded-[16px] overflow-hidden border border-slate-200 shadow-sm'>
                <iframe
                  src='https://www.google.com/maps?q=Sinanpaşa+Mah.+Süleyman+Seba+Cad.+No:14/5+Beşiktaş+İstanbul&output=embed'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='İhtiyackredisi.com Ofis Konumu'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-y-[16px]'>
            <h2 className='text-slate-900 text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-semibold'>
              İletişim Formu
            </h2>
            <p className='text-slate-600 text-[12px] leading-[16px] mt-[6px]'>
              Profesyonel ekibimiz, en kısa sürede size geri dönüş yaparak doğru
              çözümü bulmanıza yardımcı olacaktır.
            </p>
          </div>
          <div className=''>
            <div className='flex flex-col gap-y-[16px]'>
              <label className='flex w-full flex-col gap-y-[6px]'>
                <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                  Adınız ve Soyadınız
                </span>
                <input
                  type='text'
                  placeholder=''
                  className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary pl-[12px] transition-colors duration-300'
                />
              </label>

              <label className='flex w-full flex-col gap-y-[6px]'>
                <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                  E-Postanız
                </span>
                <input
                  type='email'
                  placeholder=''
                  className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary pl-[12px] transition-colors duration-300'
                />
              </label>

              <label className='flex w-full flex-col gap-y-[6px]'>
                <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                  Telefon
                </span>
                <div className='relative'>
                  <div className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-900 font-semibold select-none'>
                    +90
                  </div>
                  <input
                    type='tel'
                    placeholder=''
                    className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary pl-[60px] transition-colors duration-300'
                  />
                </div>
              </label>

              <label className='flex w-full flex-col gap-y-[6px]'>
                <span className='text-[12px] leading-[16px] text-slate-600 pl-[12px]'>
                  Mesajınız
                </span>
                <textarea
                  placeholder=''
                  className='w-full rounded-[10px] border border-slate-200 hover:border-slate-400 bg-white px-[12px] py-[12px] text-[14px] font-medium leading-[18px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary pl-[12px] transition-colors duration-300 min-h-[140px] resize-none'
                />
              </label>

              <div className='flex items-center gap-x-[12px]'>
                <input
                  id='kvkk'
                  type='checkbox'
                  className='ik-checkbox select-none'
                />
                <label
                  htmlFor='kvkk'
                  className='text-slate-600 text-[13px] leading-[16px]'
                >
                  Verilerimin KVKK kapsamında işlenmesine izin veriyorum.
                </label>
              </div>

              <FeaturedButtonComponent
                text='Mesaj Gönder'
                buttonColor='primary'
                addClass='w-full justify-center text-[14px] py-[12px] rounded-[12px]'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const CORPORATE_INFO = [
  {
    label: 'Unvan',
    value: 'AK GİRİŞİM GAYRİMENKUL İNŞAAT YAPI SANAYİ VE TİC. A.Ş.',
  },
  { label: 'Vergi Dairesi', value: 'Beşiktaş Vergi Dairesi' },
  { label: 'Vergi Numarası', value: '0111295529' },
  { label: 'Mersis Numarası', value: '0011129552900001' },
];
