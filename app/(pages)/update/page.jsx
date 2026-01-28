import UpdateClientPage from './client-page';

export const metadata = {
  title: 'Faiz Oranlarını Güncelle',
  description: 'Banka faiz oranlarını manuel olarak güncelleme sayfası.',
  robots: {
    index: false,
    follow: false,
  },
};

const UpdatePage = () => {
  return <UpdateClientPage />;
};

export default UpdatePage;