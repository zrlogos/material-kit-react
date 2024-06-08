import { Helmet } from 'react-helmet-async';

import ProductDetailView from 'src/sections/products/view/product-detail-view';

// ----------------------------------------------------------------------

export default function ProductDetailPage() {
  
  return (
    <>
      <Helmet>
        <title>商品详情 | 莆田商城</title>
      </Helmet>
      <ProductDetailView />
    </>
  );
}
