import type { Metadata } from 'next';
import { Container } from '@mui/material';
import Provider from './_modules/Provider';
import {
  Header,
  GlobalNavigationBar,
  SideNavigationBar,
  FilterChipsBox,
  FloatingUpButton,
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
