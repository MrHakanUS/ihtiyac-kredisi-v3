import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import BackgroundDecorationComponent from '@/components/common/BackgroundDecorationComponent';
import CookieConsent from '@/components/common/CookieConsent';
import { generateWebSiteSchema } from '@/utils/generateSchema';
import Script from 'next/script';
import { ApiProvider } from '@/services/api/providers/ApiProvider';
import NextAuthProvider from '@/components/providers/NextAuthProvider';

const dmsans = DM_Sans({
  variable: '--font-dmsans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const globalSchema = generateWebSiteSchema({
  title: 'Kredi Hesaplama, Faizsiz Kredi, İhtiyaç Kredisi | ihtiyackredisi.com',
  description:
    'Kredi hesaplama, faiz hesaplama, konut kredisi ve faizsiz kredi seçeneklerini karşılaştırın. En uygun kredi, banka faiz oranları ve mevduat faizi bilgilerini öğrenin.',
  currentPath: '/',
});

export async function generateMetadata() {
  const metadata = {
    metadataBase: new URL('https://ihtiyackredisi.com'),
    title: 'İhtiyaç Kredisi',
    description:
      'Kredi hesaplama, faiz hesaplama, konut kredisi ve faizsiz kredi seçeneklerini karşılaştırın. En uygun kredi, banka faiz oranları ve mevduat faizi bilgilerini öğrenin.',
    authors: [{ name: 'AK GİRİŞİM GAYRİMENKUL İNŞAAT YAPI SANAYİ VE TİC. A.Ş.' }],
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: process.env.NEXT_PUBLIC_APP_URL || 'https://ihtiyackredisi.com',
      siteName: 'İhtiyaç Kredisi',
      title: 'İhtiyaç Kredisi - Kredi Hesaplama ve Karşılaştırma',
      description:
        'Kredi hesaplama, faiz hesaplama, konut kredisi ve faizsiz kredi seçeneklerini karşılaştırın. En uygun kredi, banka faiz oranları ve mevduat faizi bilgilerini öğrenin.',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ihtiyackredisi',
      creator: '@ihtiyackredisi',
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    other: {
      'application/ld+json': JSON.stringify(globalSchema),
    },
  };

  return metadata;
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang='tr'>
      <body className={`${dmsans.variable} antialiased`}>
        <BackgroundDecorationComponent />
        <CookieConsent />
        <ApiProvider enableDevtools={true}>
          <NextAuthProvider>
            <Toaster position="top-center" />
            {children}
          </NextAuthProvider>
        </ApiProvider>
      </body>
    </html>
  );
}
