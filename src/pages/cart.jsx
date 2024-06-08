import { Helmet } from 'react-helmet-async';
import CartView from '../sections/cart/cart-view';

export default function CartPage(){
  
  return (
    <>
      <Helmet>
        <title> 购物车 | 莆田商城 </title>
      </Helmet>
      <CartView />
    </>
  );
}