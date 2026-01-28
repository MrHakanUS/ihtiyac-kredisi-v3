import HeaderComponent from '@/components/container/HeaderComponent';
import FooterComponent from '@/components/container/FooterComponent';

export default function AuthLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      <main className="">
        {children}
      </main>
      <FooterComponent />
    </>
  );
}