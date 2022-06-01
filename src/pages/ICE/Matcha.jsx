import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Matcha = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "日式抹茶冰淇淋");
  const img = '../../images/抹茶.jpg';

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

export default Matcha;