import React, { useEffect } from 'react';
import Data from '../json/landingPage.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroTeam from '../components/HeroTeam';
import AllTeam from '../components/AllTeam';

const Team = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header {...props} />
      <HeroTeam {...props} />
      <AllTeam data={Data.team} />
      <Footer />
    </>
  );
};

export default Team;
