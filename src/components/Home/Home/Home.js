import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../ProductsContainer/Products/Products';
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
        </div>
    );
};

export default Home;