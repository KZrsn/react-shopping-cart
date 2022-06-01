import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Almond = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "杏仁巧克力冰淇淋");
  const img = '../../images/杏仁巧克力.jpeg';

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

export default Almond;