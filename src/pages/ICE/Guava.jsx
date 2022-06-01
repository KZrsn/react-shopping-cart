import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Guava = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "紅心芭樂冰淇淋");
  const img = '../../images/紅心芭樂.jpg';

  return (
    <div className='IcePage'>
      <Product_Info
        ice={ice}
        img={img}
        cart={cart}
        setCart={setCart}
      />
    </div>
  )
}

export default Guava;