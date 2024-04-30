import React, { Component } from 'react';
import Data from '../json/landingPage.json';
// import Header from '../components/Header';
// import Portfolio from '../components/Portfolio';
// import Advantage from '../components/Atvantage';
// import Testimonial from '../components/Testimonial';
// import Discuss from '../components/Discuss';
import Footer from '../Components/Footer';
// import Service from '../components/Service';
import Hero from '../Components/Hero';
import Header from '../Components/Header';

export default class LandingPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header {...this.props} />
                <Hero {...this.props} />
                {/* <Service data={Data.service} /> */}
                {/* <Portfolio data={Data.portfolio} /> */}
                {/* <Advantage data={Data.advantage} /> */}
                {/* <Testimonial data={Data.testimonial} /> */}
                {/* <Discuss /> */}
                <Footer />
            </>
        );
    }
}
