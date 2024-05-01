import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Data from '../json/landingPage.json';
import Portfolio from '../components/Portfolio';
import Advantage from '../components/Advantage';
import Testimonial from '../components/Testimonial';
import Discuss from '../components/Discuss';

const LandingPage = (props) => {


    return (
        <>
            <Header {...props} />
            <Hero {...props} />
            <Service data={Data.service} />
            <Portfolio data={Data.portfolio} />
            <Advantage data={Data.advantage} />
            <Testimonial data={Data.testimonial} />
            <Discuss/>
            <Footer />
        </>
    );
}

export default LandingPage;
