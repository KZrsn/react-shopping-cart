import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Raspberry = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "覆盆莓冰淇淋");
  const img = '../../images/覆盆莓.jpg';

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

export default Raspberry;