import React from 'react';
import Header from '../../components/Header/Header';
import IMGcarousel from '../../components/Carousel/IMGcarousel';
import FooterInfo from '../../components/Footer/FooterInfo';
import UpButton from '../../components/UpButton/UpButton';
import SliderCard from '../../components/SliderCard';
import IMG from '../../images/打折.jpeg';
import data from '../../ice.json';

const hotSale = data.filter((ice) => { // 篩選資料分類中含有popular的資料
  return Object.keys(ice).some(() =>
    ice.classification.includes("popular")
  )
});

const HomePage = ({cart,addToCart}) => {
  return (
    <div className='HomePage'>
      <Header cart={cart}/>
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
      <FooterInfo />
      <UpButton />
    </div>
  )
}

export default HomePage;

