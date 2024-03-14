import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/app/ui';
import { Provider } from './provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Provider>
          <Header />

          {children}
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
