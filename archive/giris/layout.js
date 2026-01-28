import AuthHeaderComponent from '@/components/container/AuthHeaderComponent';
import FooterComponent from '@/components/container/FooterComponent';

export default function AuthLayout({ children }) {
  return (
    <>
      <AuthHeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
