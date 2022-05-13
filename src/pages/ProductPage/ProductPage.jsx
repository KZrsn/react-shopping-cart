import React from 'react';
import Header from '../../components/Header/Header';
import FooterInfo from '../../components/Footer/FooterInfo';
import UpButton from '../../components/UpButton/UpButton';
import Search from '../../components/Search/Search';

const ProductPage = ({cart,addToCart}) => {
  return (
    <div className='ProductPage'>
      <Header cart={cart}/>
      <Search addToCart={addToCart}/>
      <FooterInfo />
      <UpButton />
    </div>
  )
}

export default ProductPage;