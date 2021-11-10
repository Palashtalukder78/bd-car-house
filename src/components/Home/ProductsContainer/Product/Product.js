import React from 'react';
import './Product.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
    const { _id, brand, model, description, year, milages, price, photo } = product;
    return (
        <div className="col-md-4">
            <div className="single-product m-2 shadow">
                <div>
                    <img className="img-fluid" src={photo} alt="" />
                </div>
                <div>
                    <h3>{brand}</h3>
                    <h6 className="car-brand">{model}</h6>
                    <p>{description.slice(0, 60)}...</p>
                </div>
                <div className="flexible">
                    <div className="car-important-info">
                        <h6 >{year}</h6>
                    </div>
                    <div className="car-important-info">
                        <h6>{milages}km</h6>
                    </div>
                    <div className="car-important-info">
                        <h6>${price}</h6>
                    </div>
                </div>
                <Link style={{ textDecoration: "none" }} to={`/purchase/${_id}`}>
                    <div className="my-2 d-grid">
                        <button className="my-btn btn btn-sm"><ShoppingCartIcon />Purchase Now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Product;