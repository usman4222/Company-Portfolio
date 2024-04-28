import React, { Component } from 'react';
import Data from '../json/landingPage.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Portfolio from '../components/Portfolio';
import Advantage from '../components/Atvantage';
import Testimonial from '../components/Testimonial';
import Discuss from '../components/Discuss';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { location } = this.props; 
    return (
      <>
        <Header location={location}  />
        <Hero {...this.props} />
        <Service data={Data.service} />
        <Portfolio data={Data.portfolio} />
        <Advantage data={Data.advantage} />
        <Testimonial data={Data.testimonial} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
