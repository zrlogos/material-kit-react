import { Helmet } from 'react-helmet-async';
import ProductDetailView from 'src/sections/products/view/product-detail-view';

// ----------------------------------------------------------------------

export default function ProductDetailPage() {
  return (
    <>
      <Helmet>
        <title>Product Detail | Minimal UI</title>
      </Helmet>

      <ProductDetailView />
    </>
  );
}
