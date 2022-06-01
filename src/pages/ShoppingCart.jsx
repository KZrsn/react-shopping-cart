import React from 'react';
import Cart from '../components/Cart/Cart';

const ShoppingCart = ({cart,setCart}) => {
  return (
    <div className='ShoppingCart'>
      <Cart
        cart={cart}
        setCart={setCart}
      />
    </div>
  )
}

export default ShoppingCart;