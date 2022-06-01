import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Oreo = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "Oreo巧克力脆片冰淇淋");
  const img = '../../images/oreo.jpeg';
  
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

export default Oreo;