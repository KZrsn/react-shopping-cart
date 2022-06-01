import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Strawberry = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "經典草莓冰淇淋");
  const img = '../../images/經典草莓.jpg';

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

export default Strawberry;