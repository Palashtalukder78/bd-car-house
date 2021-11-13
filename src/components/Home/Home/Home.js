import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Products from '../ProductsContainer/Products/Products';
import Reviews from '../Reviews/Reviews/Reviews';
import './Home.css'
const Home = () => {
    const { allFirebase } = useAuth();
    const { isLoading } = allFirebase;
    if (isLoading) {
        return (
            <div style={{ height: "500px", display: "flex", alignItems: 'center' }}>
                <div className="loader mx-auto"></div>
            </div>
        )
    }
    return (
        <div>
            <div className="nav-banner">
                <Navigation></Navigation>
                <Banner></Banner>
            </div>
            <Products></Products>
            <Facilities></Facilities>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;