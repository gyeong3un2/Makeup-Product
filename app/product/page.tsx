import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { product } from '@/data/product';
import Image from 'next/image';
import { Gruppo } from 'next/font/google';
import clsx from 'clsx';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

function ProductPage() {
  return (
    <main
      className={clsx(
        'flex min-h-screen flex-col items-center',
        gruppo.className,
      )}
    >
      <Container className="max-w-xl">
        <Divider />

        <Card className="h-full shadow-none m-auto">
          <Image
            className="w-36 my-3"
            src={`http:${product.api_featured_image}`}
            alt={product.name}
            width={32}
            height={32}
          />
          <CardContent>
            <Typography>Brand: {product.brand}</Typography>
            <Typography>
              Price: {product.price_sign}
              {product.price}
            </Typography>
            <Typography>Star rating: {product.rating && 'unrated'}</Typography>

            <Button>Buy Now</Button>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}

export default ProductPage;
