import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Grid, Button, Container, Typography } from '@mui/material';

import { products } from 'src/_mock/products';

// ----------------------------------------------------------------------

export default function ProductDetailView() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.cover}
            alt={product.name}
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {product.name}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2, color: 'text.secondary' }}>
            ${product.price}
          </Typography>
          {product.priceSale && (
            <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
              Sale Price: ${product.priceSale}
            </Typography>
          )}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            {product.colors.map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: color,
                  borderRadius: '50%',
                }}
              />
            ))}
          </Box>
          <Button variant="contained" sx={{ mr: 2 }}>
            Add to Cart
          </Button>
          <Button variant="outlined">Buy Now</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
