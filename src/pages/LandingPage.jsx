import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header {...props} />
            <Footer/>
        </>
    );
}

export default LandingPage;
