import React, { Component } from 'react';
import Footer from '../Components/Footer';
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
                <Footer />
            </>
        );
    }
}
