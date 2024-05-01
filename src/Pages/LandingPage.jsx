import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

const LandingPage = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header {...props} />
            <Hero {...props} />
            <Footer />
        </>
    );
}

export default LandingPage;
