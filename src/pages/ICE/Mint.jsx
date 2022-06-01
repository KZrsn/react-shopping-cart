import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Mint = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "經典薄荷巧克力冰淇淋");
  const img = '../../images/薄荷巧克力.jpg';

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

export default Mint;