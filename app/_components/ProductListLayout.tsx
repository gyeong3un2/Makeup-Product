import { Container } from '@mui/material';
import {
  FilterChipsBox,
  FloatingUpButton,
  GlobalNavigationBar,
  SideNavigationBar,
} from '.';

function ProductListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalNavigationBar />

      <SideNavigationBar />

      <FloatingUpButton />

      <Container className="max-w-xl">
        <FilterChipsBox />

        {children}
      </Container>
    </>
  );
}

export default ProductListLayout;
