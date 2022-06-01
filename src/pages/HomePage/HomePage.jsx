import React from 'react';
import IMGcarousel from '../../components/Carousel/IMGcarousel';
import SliderCard from '../../components/SliderCard';
import IMG from '../../images/打折.jpeg';
import data from '../../ice.json';

const hotSale = data.filter((ice) => { // 篩選資料分類中含有popular的資料
  return Object.keys(ice).some(() =>
    ice.classification.includes("popular")
  )
});

const HomePage = ({addToCart}) => {
  return (
    <div className='HomePage'>
      <IMGcarousel />
      <div className='discount'>
        <div className='font'>
          <h4>歡慶開幕</h4>
          <p>全館全品項折扣50元起 ! !</p>
        </div>
        <img src={IMG} alt="打折" />
      </div>
      <div className='hotSale'>
        <h4>熱門產品</h4>
        <hr />
        <SliderCard data={hotSale} addToCart={addToCart} />
      </div>
    </div>
  )
}

export default HomePage;

