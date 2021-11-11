import React from 'react';
import './SingleOrderItem.css'
const SingleOrderItem = ({ order }) => {
    const { brand, model, price, status } = order;
    return (
        <div className="col-md-6 my-3">
            <div className="flexible-single-order shadow">
                <div className="d-inline">
                    <img className="img-fluid" src={order?.photo} alt="" />
                </div>
                <div className="p-2">
                    <h5>Brand: {brand}</h5>
                    <h6>Model: {model}</h6>
                    <h6>Price: ${price}</h6>
                    <h6>Status: <span className="order-status">{status}</span></h6>
                    <button className="my-btn btn btn-sm">Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default SingleOrderItem;