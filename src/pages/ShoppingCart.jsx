import React from 'react';
import Cart from '../components/Cart/Cart';
import FooterInfo from '../components/Footer/FooterInfo';
import Header from '../components/Header/Header';
import UpButton from '../components/UpButton/UpButton';

const ShoppingCart = ({cart,setCart}) => {
  return (
    <div className='ShoppingCart'>
      <Header cart={cart} />
      <Cart
        cart={cart}
        setCart={setCart}
      />
      <FooterInfo />
      <UpButton />
    </div>
  )
}

export default ShoppingCart;