import AccountHeader from '@/components/container/HeaderComponent/AccountHeader';
import FooterComponent from '@/components/container/FooterComponent';
import AccountSidebar from '@/components/container/AccountSidebar';

export default function HomeLayout({ children }) {
  return (
    <>
      <AccountHeader />
      <main>
        <div className='custom-container-1 px-4 pt-[56px]'>
          <div className='grid grid-cols-12 gap-[20px]'>
            <aside className='col-span-12 md:col-span-4 lg:col-span-3'>
              <AccountSidebar />
            </aside>
            <section className='col-span-12 md:col-span-8 lg:col-span-9 flex flex-col gap-y-[16px]'>
              {children}
            </section>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}
