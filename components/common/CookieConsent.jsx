'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie, setCookie } from 'cookies-next';

const GTM_ID = 'GTM-KR5PR574';
const GA_ID = 'G-JQ4DN2976E';
const AW_ID = 'AW-11504546977';

const CookieConsentComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPreferencesVisible, setIsPreferencesVisible] = useState(false);
  const [acceptedAnalytics, setAcceptedAnalytics] = useState(false);
  const [acceptedMarketing, setAcceptedMarketing] = useState(false);
  const [acceptedFunctional, setAcceptedFunctional] = useState(false);
  const [acceptedPerformance, setAcceptedPerformance] = useState(false);

  useEffect(() => {
    initializeConsentMode();
    
    const consentData = getCookie('cookie-consent');
    
    if (!consentData) {
      setIsVisible(true);
    } else {
      const consent = JSON.parse(consentData);
      
      setAcceptedAnalytics(consent.analytics || false);
      setAcceptedMarketing(consent.marketing || false);
      setAcceptedFunctional(consent.functional || false);
      setAcceptedPerformance(consent.performance || false);
      
      updateConsentMode('analytics', consent.analytics || false);
      updateConsentMode('marketing', consent.marketing || false);
      updateConsentMode('functional', consent.functional || false);
      updateConsentMode('performance', consent.performance || false);
      
      if (consent.analytics) {
        setTimeout(() => {
          loadGtm();
        }, 500); 
      }
    }

    window.showCookiePreferences = () => {
      setIsPreferencesVisible(true);
    };
  }, []);

  const initializeConsentMode = () => {
   
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    
    
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'functionality_storage': 'denied',
      'personalization_storage': 'denied',
      'security_storage': 'granted',
      'wait_for_update': 500
    });


    const f = document.getElementsByTagName('script')[0];
    const j = document.createElement('script');
    j.async = true;
    j.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    f.parentNode.insertBefore(j,f);

    window.gtag = gtag;
    window.gtm_loaded = true;
  };

  const updateConsentMode = (category, granted) => {
    if (!window.gtag) return;

    const consentUpdate = {};
    
    switch (category) {
      case 'analytics':
        consentUpdate.analytics_storage = granted ? 'granted' : 'denied';
        break;
      case 'marketing':
        consentUpdate.ad_storage = granted ? 'granted' : 'denied';
        consentUpdate.ad_user_data = granted ? 'granted' : 'denied';
        consentUpdate.ad_personalization = granted ? 'granted' : 'denied';
        break;
      case 'functional':
        consentUpdate.functionality_storage = granted ? 'granted' : 'denied';
        break;
      case 'performance':
        consentUpdate.personalization_storage = granted ? 'granted' : 'denied';
        break;
    }

    window.gtag('consent', 'update', consentUpdate);
  };

  const loadGtm = () => {
    if (!window.gtag || !window.gtm_loaded) return;

 
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    window.gtag('config', AW_ID);

   
    // GTM noscript iframe removed to prevent scrolling issues
    // The main GTM script is already loaded in initializeConsentMode()
  };

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      performance: true,
      consentId: Date.now().toString()
    };
    setCookie('cookie-consent', JSON.stringify(consent), { maxAge: 60 * 60 * 24 * 365 });
    
    setAcceptedAnalytics(true);
    setAcceptedMarketing(true);
    setAcceptedFunctional(true);
    setAcceptedPerformance(true);
    
    loadGtm();
    updateConsentMode('analytics', true);
    updateConsentMode('marketing', true);
    updateConsentMode('functional', true);
    updateConsentMode('performance', true);
    
    setIsVisible(false);
    setIsPreferencesVisible(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      performance: false,
      consentId: Date.now().toString()
    };
    setCookie('cookie-consent', JSON.stringify(consent), { maxAge: 60 * 60 * 24 * 365 });
    
    setAcceptedAnalytics(false);
    setAcceptedMarketing(false);
    setAcceptedFunctional(false);
    setAcceptedPerformance(false);
    
    updateConsentMode('analytics', false);
    updateConsentMode('marketing', false);
    updateConsentMode('functional', false);
    updateConsentMode('performance', false);
    
    setIsVisible(false);
    setIsPreferencesVisible(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      necessary: true,
      analytics: acceptedAnalytics,
      marketing: acceptedMarketing,
      functional: acceptedFunctional,
      performance: acceptedPerformance,
      consentId: Date.now().toString()
    };
    setCookie('cookie-consent', JSON.stringify(consent), { maxAge: 60 * 60 * 24 * 365 });
    
    if (acceptedAnalytics) {
      loadGtm();
      updateConsentMode('analytics', true);
    } else {
      updateConsentMode('analytics', false);
    }
    
    if (acceptedMarketing) {
      updateConsentMode('marketing', true);
    } else {
      updateConsentMode('marketing', false);
    }
    
    if (acceptedFunctional) {
      updateConsentMode('functional', true);
    } else {
      updateConsentMode('functional', false);
    }
    
    if (acceptedPerformance) {
      updateConsentMode('performance', true);
    } else {
      updateConsentMode('performance', false);
    }
    
    setIsVisible(false);
    setIsPreferencesVisible(false);
  };

  const showPreferences = () => {
    setIsVisible(false);
    setIsPreferencesVisible(true);
  };

  const closePreferences = () => {
    setIsPreferencesVisible(false);
  };

  if (!isVisible && !isPreferencesVisible) return null;

  if (isPreferencesVisible) {
    return (
      <div className='fixed inset-0 z-[9999] bg-black/30 flex justify-end'>
        <div className='w-[480px] max-w-[95vw] h-full bg-white shadow-2xl flex flex-col'>
          <div className='p-6 border-b border-slate-200 flex justify-between items-center'>
            <div>
              <h3 className='text-[22px] font-semibold text-slate-900'>Çerez Tercihleri</h3>
              <p className='mt-1 text-[13px] leading-5 text-slate-600'>
                Size daha iyi bir deneyim sunmak için hangi çerezlere izin vereceğinizi seçin.
              </p>
            </div>
            <button 
              onClick={closePreferences}
              className='text-slate-400 hover:text-slate-600 text-xl font-bold'
            >
              ×
            </button>
          </div>
          
          <div className='flex-1 p-6 space-y-6 overflow-y-auto'>
      
            <div className='border-b border-slate-100 pb-4'>
              <div className='flex items-center justify-between mb-2'>
                <h4 className='text-[16px] font-semibold text-slate-800'>Kesinlikle Gerekli Çerezler</h4>
                <div className="relative w-11 h-6 bg-primary rounded-full">
                  <div className="absolute top-0.5 right-[2px] bg-white border border-gray-300 rounded-full h-5 w-5"></div>
                </div>
              </div>
              <p className='text-[13px] leading-5 text-slate-600 mb-2'>
                Bu çerezler, web sitesinin düzgün çalışması için gereklidir ve devre dışı bırakılamaz.
              </p>
              <div className='text-[12px] text-slate-500'>
                <strong>Kullanılan çerezler:</strong> Oturum çerezleri, güvenlik çerezleri, tercih çerezleri
              </div>
            </div>

 
            <div className='border-b border-slate-100 pb-4'>
              <div className='flex items-center justify-between mb-2'>
                <h4 className='text-[16px] font-semibold text-slate-800'>Analitik Çerezler</h4>
                <label className="inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={acceptedAnalytics} 
                    onChange={() => setAcceptedAnalytics(!acceptedAnalytics)} 
                    className="sr-only peer" 
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <p className='text-[13px] leading-5 text-slate-600 mb-2'>
                Bu çerezler, sitemizin performansını ve kullanımını anlamamıza yardımcı olur.
              </p>
              <div className='text-[12px] text-slate-500'>
                <strong>Kullanılan çerezler:</strong> Google Analytics (_ga, _ga_*), Google Tag Manager
              </div>
            </div>

          
            <div className='border-b border-slate-100 pb-4'>
              <div className='flex items-center justify-between mb-2'>
                <h4 className='text-[16px] font-semibold text-slate-800'>Pazarlama Çerezleri</h4>
                <label className="inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={acceptedMarketing} 
                    onChange={() => setAcceptedMarketing(!acceptedMarketing)} 
                    className="sr-only peer" 
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <p className='text-[13px] leading-5 text-slate-600 mb-2'>
                Bu çerezler, size daha alakalı reklamlar göstermek için kullanılır.
              </p>
              <div className='text-[12px] text-slate-500'>
                <strong>Kullanılan çerezler:</strong> Google Ads, Facebook Pixel, reklam ağı çerezleri
              </div>
            </div>

       
            <div className='border-b border-slate-100 pb-4'>
              <div className='flex items-center justify-between mb-2'>
                <h4 className='text-[16px] font-semibold text-slate-800'>İşlevsel Çerezler</h4>
                <label className="inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={acceptedFunctional} 
                    onChange={() => setAcceptedFunctional(!acceptedFunctional)} 
                    className="sr-only peer" 
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <p className='text-[13px] leading-5 text-slate-600 mb-2'>
                Bu çerezler, gelişmiş özellikler ve kişiselleştirme sağlar.
              </p>
              <div className='text-[12px] text-slate-500'>
                <strong>Kullanılan çerezler:</strong> Dil tercihleri, tema ayarları, form verileri
              </div>
            </div>

    
            <div className='border-b border-slate-100 pb-4'>
              <div className='flex items-center justify-between mb-2'>
                <h4 className='text-[16px] font-semibold text-slate-800'>Performans Çerezleri</h4>
                <label className="inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={acceptedPerformance} 
                    onChange={() => setAcceptedPerformance(!acceptedPerformance)} 
                    className="sr-only peer" 
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <p className='text-[13px] leading-5 text-slate-600 mb-2'>
                Bu çerezler, site performansını optimize etmek için kullanılır.
              </p>
              <div className='text-[12px] text-slate-500'>
                <strong>Kullanılan çerezler:</strong> Sayfa yükleme süreleri, hata raporlama, optimizasyon çerezleri
              </div>
            </div>

            <div>
              <p className='text-[13px] leading-5 text-slate-600'>
                Çerezler hakkında daha fazla bilgi için lütfen <Link href='/yasal/cerez-acik-riza-metni' className='text-accent hover:underline'>Çerez Politikamızı</Link> inceleyin.
              </p>
            </div>
          </div>
          
          <div className='p-4 bg-slate-50 border-t border-slate-200 grid grid-cols-3 gap-3'>
            <button
              onClick={handleRejectAll}
              className='px-3 h-10 rounded-lg border border-slate-300 text-[14px] font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer'
            >
              Tümünü Reddet
            </button>
            <button
              onClick={handleSavePreferences}
              className='px-3 h-10 rounded-lg bg-primary text-white text-[14px] font-medium hover:brightness-95 transition-colors cursor-pointer'
            >
              Tercihleri Kaydet
            </button>
            <button
              onClick={handleAcceptAll}
              className='px-3 h-10 rounded-lg bg-green-600 text-white text-[14px] font-medium hover:brightness-95 transition-colors cursor-pointer'
            >
              Tümünü Kabul Et
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='fixed bottom-5 right-5 z-[9999]'>
      <div className='w-[360px] max-w-[92vw] rounded-2xl shadow-xl border border-slate-200 bg-white/90 backdrop-blur-md p-6 text-slate-800'>
        <div className='flex flex-col gap-4'>
          <div>
            <h3 className='text-[20px] mb-2 font-semibold text-slate-900'>Çerezler Hakkında</h3>
            <p className='mt-1 text-[13px] leading-5 text-slate-600 text-justify'>
              Size daha iyi bir deneyim sunmak ve sitemizi geliştirmek için çerezleri kullanıyoruz.
              <Link href='/yasal/cerez-acik-riza-metni' className='text-accent hover:underline ml-1'>Daha fazla bilgi.</Link>
            </p>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <button
              onClick={showPreferences}
              className='px-3 h-9 rounded-lg border border-slate-300 text-[13px] text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer'
            >
              Tercihleri Yönet
            </button>
            <button
              onClick={handleAcceptAll}
              className='px-3 h-9 rounded-lg bg-primary text-white text-[13px] hover:brightness-95 transition-colors cursor-pointer'
            >
              Kabul Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentComponent;
