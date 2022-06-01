import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Coffee = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "苦甜咖啡冰淇淋");
  const img = '../../images/咖啡.jpg';

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

export default Coffee;