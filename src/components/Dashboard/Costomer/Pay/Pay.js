import React, { useEffect } from 'react';
import commingSoon from '../../../../images/payment.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Pay = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-down" data-aos-delay="500">
            <div className="text-center" style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img className="img-fluid" src={commingSoon} alt="" />
            </div>
        </div>
    );
};

export default Pay;