import React, { Component } from 'react';
import Foot from '../Components/Foot';
import HeroSecion from '../Components/HeroSection';
import Head from '../Components/Head';

export default class LandingPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Head {...this.props} />
                <HeroSecion {...this.props} />
                <Foot />
            </>
        );
    }
}
