import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg'
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div key={idx}>
          <img src={img} alt={`slide-${idx}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
