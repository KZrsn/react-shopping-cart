import React from 'react';
import FooterInfo from '../../components/Footer/FooterInfo';
import Header from '../../components/Header/Header';
import Product_Info from '../../components/Product_Info/Product_Info';
import data from '../../ice.json';

const Milk = ({cart,setCart}) => {
  const ice = data.filter((data) => data.title == "香濃小農鮮奶冰淇淋");
  const img = '../../images/香濃小農鮮奶.jpg';

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

export default Milk;