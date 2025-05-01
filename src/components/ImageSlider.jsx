import React, { useState } from 'react';
import './ImageSlider.css';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="nav left" onClick={prevSlide}>&lt;</button>
      <img src={images[current]} alt="Slide" />
      <button className="nav right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
