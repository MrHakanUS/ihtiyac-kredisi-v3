import HeaderComponent from '@/components/container/HeaderComponent';
import FooterComponent from '@/components/container/FooterComponent';
import Sidebar from '@/components/panel/Sidebar';

export default function PanelLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      <main className="py-12" style={{ paddingBottom: '0px' }}>
        <div className="custom-container-1">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <Sidebar />
            </aside>
            <div className="lg:col-span-3">
              {children}
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}

