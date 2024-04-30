import React, { Component } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/HeroSection';
import Header from '../Components/Head';

export default class LandingPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header {...this.props} />
                <Hero {...this.props} />
                <Footer />
            </>
        );
    }
}
