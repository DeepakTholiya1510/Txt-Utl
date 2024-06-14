import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import the Bootstrap CSS
import './ImagePicker.css';

const ImagePicker = () => {
  return (
    <div className="image-picker__box">
      <Carousel>
        <Carousel.Item>
          <img
            src={`${process.env.PUBLIC_URL}/Untitled-design-2.png`}
            alt="First slide"
            className="image-picker__image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={`${process.env.PUBLIC_URL}/Untitled-design.png`}
            alt="Second slide"
            className="image-picker__image"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImagePicker;
