import React from 'react';
import Header from "./Header/Header";
import Sec1 from "./Main/Section1/Sec1";
import Sec2 from "./Main/Section2/Sec2";
import Sec3 from "./Main/Section3/Sec3";
import Section4 from "./Main/Section4/Section4";
import Section5 from "./Main/Section5/Section5";
import Section6 from "./Main/Section6/Section6";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <div>
            <Header/>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Footer/>
        </div>
    );
};

export default App;