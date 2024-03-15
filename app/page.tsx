import { Container } from '@mui/material';
import { DisplayProducts } from './components';

/**
 * 메인 페이지
 */
function Home() {
  return (
    <main className="flex flex-col items-center">
      <Container className="max-w-xl">
        <DisplayProducts />
      </Container>
    </main>
  );
}

export default Home;
