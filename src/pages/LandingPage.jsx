import React, { useEffect } from 'react';
import Header from '../components/Header';

const LandingPage = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header {...props} />
        </>
    );
}

export default LandingPage;
