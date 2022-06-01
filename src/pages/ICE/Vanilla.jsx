import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Vanilla = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "經典香草冰淇淋");
  const img = '../../images/香草.jpeg';

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

export default Vanilla;