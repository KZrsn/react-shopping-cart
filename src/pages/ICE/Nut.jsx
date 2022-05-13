import React from 'react';
import FooterInfo from '../../components/Footer/FooterInfo';
import Header from '../../components/Header/Header';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Nut = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "濃郁鮮奶堅果冰淇淋");
  const img = '../../images/濃郁鮮奶堅果.jpg';

  return (
    <div className='IcePage'>
      <Header cart={cart} />
      <Product_Info
        ice={ice}
        img={img}
        cart={cart}
        setCart={setCart}
      />
      <FooterInfo />
    </div>
  )
}

export default Nut;