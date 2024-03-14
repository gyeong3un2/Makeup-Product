import type { Metadata } from 'next';
import { Header } from '@/app/ui';
import { Provider } from './provider';
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
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
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
