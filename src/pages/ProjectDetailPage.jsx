import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../json/landingPage.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioDetail from '../components/PortfolioDetail';

function ProjectDetailPage() {
    const { id } = useParams();
    const detailData = Data.portfolio.filter((item) => item.id === id);

    return (
        <>
            <Header />
            <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
            <Footer />
        </>
    );
}

export default ProjectDetailPage;
