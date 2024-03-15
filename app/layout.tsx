import type { Metadata } from 'next';
import { Container } from '@mui/material';
import {
  FilterChipsBox,
  FloatingUpButton,
  GlobalNavigationBar,
  Header,
  SideNavigationBar,
} from './components';
import { Provider } from './modules/provider';
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
          <GlobalNavigationBar />

          <Container className="max-w-xl">
            <FilterChipsBox />
          </Container>

          <main className="flex flex-col items-center">
            <SideNavigationBar />
          </main>

          <FloatingUpButton />

          {children}
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
