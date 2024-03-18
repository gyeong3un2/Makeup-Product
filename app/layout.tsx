import type { Metadata } from 'next';
import { Container } from '@mui/material';
import Provider from './modules/Provider';
import {
  FilterChipsBox,
  FloatingUpButton,
  GlobalNavigationBar,
  Header,
  SideNavigationBar,
} from './_components';
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

          <GlobalNavigationBar />

          <SideNavigationBar />

          <FloatingUpButton />

          <Container className="max-w-xl">
            <FilterChipsBox />

            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
