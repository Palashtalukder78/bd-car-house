import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="row banner">
                <div className="col-6 banner-content">
                    <div className="content">
                        <h1>Welcome to our BD<br />  CAR HOUSE</h1>
                        <p>Check out Car Showroom Usa. Save Time, and Find it Here. Web, Images & Video. Information 24/7. Wiki, News & More. 100+ Million Visitors. Trusted by Millions. The Complete Overview.</p>
                        <button className="banner-btn">EXPLORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;