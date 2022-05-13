import React from 'react';
import IMG from '../images/打折.jpeg';

const Discount = () => {
  return (
    <div className='Discount'>
      <div className='font'>
        <h4>歡慶開幕</h4>
        <p>全館全品項折扣50元起 ! !</p>
      </div>
      <img src={IMG} alt="打折" />
    </div>
  )
}

export default Discount;