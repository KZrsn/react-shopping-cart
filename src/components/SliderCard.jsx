import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Card from "./Card/Card";

export default function SliderCard({data,addToCart}) {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <IoIosArrowBack  {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <IoIosArrowForward {...props} />
  );
    const settings = {
      dots: false, // 點
      infinite: true, // 無限
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      responsive: [ 
        {
          breakpoint: 1900, // breakpoint小於1900
          settings: {
            slidesToShow: 4, // 顯示4個
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <div className="card_container">
        <Slider {...settings} className="card_container--inner">
          {data.map((val, key) => {
            return (
              <div className="slider" key={key}>
                <Card item={val} addToCart={addToCart} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }