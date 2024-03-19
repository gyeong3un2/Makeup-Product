import type { Metadata } from 'next';
import Provider from './_modules/Provider';
import { Header } from './_components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Makeup API',
  description: 'Makeup API',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Provider>
          <Header />

          {children}
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
