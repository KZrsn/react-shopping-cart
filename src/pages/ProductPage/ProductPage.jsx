import React from 'react';
import Search from '../../components/Search/Search';

const ProductPage = ({addToCart}) => {
  return (
    <div className='ProductPage'>
      <Search addToCart={addToCart}/>
    </div>
  )
}

export default ProductPage;