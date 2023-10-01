import React, { useState } from "react";
import "../styles/Slider.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <img className="slider-image" src={images[currentIndex]} alt="" />
      <button className="slider-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;