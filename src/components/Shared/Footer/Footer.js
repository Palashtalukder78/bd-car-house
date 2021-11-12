import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const linkdin = "https://www.linkedin.com/in/md-ariful-islam-palash/";
    const facebook = "https://www.facebook.com/profile.php?id=100009430642663";
    const youtube = "https://www.youtube.com/channel/UCbP3eGSZ3j7rqJcLdk6DLrw";
    return (
        <div className="footer mt-5">
            <div className="container">
                <div className="row text-light pt-5 pb-3">
                    <div className="col-md-4">
                        <h2>BD CAR HOUSE</h2>
                        <p>It is a business that sells new or used cars at the retail level, based on a dealership contract with an automaker or its sales subsidiary. It can also carry a variety of Certified Pre-Owned vehicles. </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2>Important Link</h2>
                        <NavLink className="menu" to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }}><span style={{ color: "#fff" }}>Home</span></NavLink>
                        <NavLink className="menu" to="/dashboard" activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }}><span style={{ color: "#fff" }}>Dashboard</span></NavLink>


                        <div className="social-icon">
                            <a href={linkdin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>

                            <a href={facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>

                            <a href={youtube} target="_blank" rel="noreferrer"><i className="fab fa-youtube-square"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 >Contact US</h2>
                        <div >
                            <div className="footer-address">
                                <i className="fas fa-home"></i>
                                <span>Savar, Dhaka</span>
                            </div>
                            <div className="footer-address">
                                <i className="fa fa-envelope"></i>
                                <span>mediService.support@gmail.com</span>
                            </div>
                            <div className="footer-address">
                                <i className="fa fa-phone"></i>
                                <span>+880-1990524105</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-light text-center copy-right">
                <p className="m-0 py-2">Copyright &copy; 2021 || Developed by Md Ariful islam Palash</p>
            </div>
        </div>
    );
};

export default Footer;