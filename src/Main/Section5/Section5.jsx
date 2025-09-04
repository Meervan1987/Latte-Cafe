import React from 'react';
import './Section5.css';
import image1 from './Image/IMAGE5.png'; // Left top image (bottles)
import image2 from './Image/IMAGE5.2.png'; // Left bottom image (food dish)
import image3 from './Image/IMAGE5.3.png'; // Right image (interior)

const Section5 = () => {
    return (
        <section className="section5">
            <div className="gallery-container">
                <div className="gallery-left">
                    <div className="gallery-item left-top"><img src={image1} alt="Bottles" /></div>
                    <div className="gallery-item left-bottom"><img src={image2} alt="Food Dish" /></div>
                </div>
                <div className="gallery-right">
                    <div className="gallery-item right-image"><img src={image3} alt="Interior" /></div>
                </div>
            </div>
        </section>
    );
};

export default Section5;