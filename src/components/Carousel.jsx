import React from 'react';
import img1 from '../images/background-logo.jpg';
import img2 from '../images/background-main-no-cars.png';
import img3 from '../images/main-logo.jpg';

function Carousel() {
  return (
    <>
        <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        >
        <div className="carousel-inner" style={{ height: '300px', overflow: 'hidden' }}>
            <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Slide 1" style={{ objectFit: 'cover', height: '100%' }} />
            </div>
            <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Slide 2" style={{ objectFit: 'cover', height: '100%' }} />
            </div>
            <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Slide 3" style={{ objectFit: 'cover', height: '100%' }} />
            </div>
        </div>
        </div>
    </>
  );
}

export default Carousel;