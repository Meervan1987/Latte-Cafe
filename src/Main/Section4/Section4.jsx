import React from 'react';
import './Section4.css';

const Section4 = () => {
    return (
        <section className="section4">
            <div className="info-container">
                <div className="info-column">
                    <h3>Location</h3>
                    <p>101 Cuba St, Te Aro, Wellington</p>
                </div>
                <div className="info-column">
                    <h3>Hours</h3>
                    <p>Tuesday to Friday</p>
                    <p>7AM - 3PM</p>
                    <p>Saturday to Sunday</p>
                    <p>8AM - 3PM</p>
                </div>
                <div className="info-column">
                    <h3>Mondays?</h3>
                    <p>We are closed on Mondays to reflect and refuel</p>
                </div>
            </div>
        </section>
    );
};

export default Section4;