import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="nav-banner">
                <Navigation></Navigation>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;