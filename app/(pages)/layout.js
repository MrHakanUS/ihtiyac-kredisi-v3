import HeaderComponent from '@/components/container/HeaderComponent';
import FooterComponent from '@/components/container/FooterComponent';

export default function HomeLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
