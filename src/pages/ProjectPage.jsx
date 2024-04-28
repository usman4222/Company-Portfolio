/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Data from '../json/landingPage.json';
import Header from '../components/Header';
import Discuss from '../components/Discuss';
import Footer from '../components/Footer';
import AllPortfolio from '../components/AllPortfolio';
import HeroPortfolio from '../components/HeroPortfolio';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <HeroPortfolio {...this.props} />
        <AllPortfolio data={Data.portfolio} />
        <Discuss {...this.props} />
        <Footer />
      </>
    );
  }
}
