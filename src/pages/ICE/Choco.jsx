import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Choco = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "經典巧克力冰淇淋");
  const img = '../../images/巧克力.jpg';

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

export default Choco;