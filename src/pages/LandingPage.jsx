import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Data from '../json/landingPage.json';

const LandingPage = (props) => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []); 

    return (
        <>
            <Header {...props} />
            <Hero {...props} />
            <Service data={Data.service} />
            <Footer />
        </>
    );
}

export default LandingPage;
