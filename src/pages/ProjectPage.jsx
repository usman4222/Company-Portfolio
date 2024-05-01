import React, { useEffect } from 'react';
import Data from '../json/landingPage.json';
import Header from '../components/Header';
import Discuss from '../components/Discuss';
import Footer from '../components/Footer';
import AllPortfolio from '../components/AllPortfolio';
import HeroPortfolio from '../components/HeroPortfolio';

const ProjectPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header {...props} />
      <HeroPortfolio {...props} />
      <AllPortfolio data={Data.portfolio} />
      <Discuss {...props} />
      <Footer />
    </>
  );
};

export default ProjectPage;
