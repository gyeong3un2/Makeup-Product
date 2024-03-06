import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StreamQueryClientProvider from '../provider/StreamQueryClientProvider';

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
      <body className={inter.className}>
        <StreamQueryClientProvider>{children}</StreamQueryClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
