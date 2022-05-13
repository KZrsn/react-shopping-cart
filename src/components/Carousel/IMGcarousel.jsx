import React from 'react';
import { Carousel } from 'react-bootstrap';
import IMG01 from '../../images/pexels-jéshoots-3631.jpg';
import IMG02 from '../../images/pexels-lukas-1352296.jpg';
import IMG03 from '../../images/pexels-photo-10175400.jpeg';

const IMGcarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={IMG01}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={IMG02}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={IMG03}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
      )
}

export default IMGcarousel;