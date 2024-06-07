import { Helmet } from 'react-helmet-async';

import Checkout from 'src/sections/checkout/Checkout';
// ----------------------------------------------------------------------

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title> Checkout| Minimal UI </title>
      </Helmet>
      <Checkout />
    </>
  );
}
