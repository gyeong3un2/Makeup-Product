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

          <main className="flex flex-col items-center">
            <SideNavigationBar />
          </main>

          <Container className="max-w-xl">
            <FilterChipsBox />

            {children}
          </Container>

          <FloatingUpButton />
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
