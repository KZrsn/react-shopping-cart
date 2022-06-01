import React from 'react';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Nut = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "濃郁鮮奶堅果冰淇淋");
  const img = '../../images/濃郁鮮奶堅果.jpg';

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

export default Nut;