import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/pagenotfound.gif';
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        <div>
            <div className="text-center page-not-found">
                <img className="img-fluid" src={notFound} alt="" />
                <br />
                <h4>Page not Found !!!</h4>
                <NavLink to="/home">
                    <button className="btn my-btn btn-lg text-center">Go Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;