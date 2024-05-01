import React, { Component } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

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
