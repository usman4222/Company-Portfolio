import React, { Component } from 'react';
import Data from '../json/landingPage.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroTeam from '../components/HeroTeam';
import AllTeam from '../components/AllTeam';

export default class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <HeroTeam {...this.props} />
        <AllTeam data={Data.team} />
        <Footer />
      </>
    );
  }
}
