import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Peanut = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "花生巧克力豆冰淇淋");
  const img = '../../images/花生巧克力豆.jpg';

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

export default Peanut;