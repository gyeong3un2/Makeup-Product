import { ProductListDisplay } from './_components';
import ProductLayout from './_components/productLayout';

/**
 * 메인 페이지
 */
function Home() {
  return (
    <ProductLayout>
      <ProductListDisplay />
    </ProductLayout>
  );
}

export default Home;
