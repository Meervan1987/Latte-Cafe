import React from 'react';
import './Sec3.css';
import  image3 from './Image/IMAGE3.png';


const Sec3 = () => {
    return (
        <section className="section3">
            <div className="menu-container">
                <div className="section3-box-left">
                <h2>Menu</h2>
                <p>We change our menu every season. <br/>
                    Here is what we are currently <br/>
                    dishing up.</p>
                    <button className="Food Menu">Food Menu</button>
                    <button className="Drinks Menu">Drinks Menu</button>
                    <button className="Takeaway Menu">Drinks Menu</button>
                </div>
                <div className="section3-box-right">
                    <img src={image3} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Sec3;