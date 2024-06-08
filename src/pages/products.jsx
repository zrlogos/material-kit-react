import { Helmet } from 'react-helmet-async';

import { ProductsView } from 'src/sections/products/view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> 商品 | 莆田商城 </title>
      </Helmet>

      <ProductsView />
    </>
  );
}
