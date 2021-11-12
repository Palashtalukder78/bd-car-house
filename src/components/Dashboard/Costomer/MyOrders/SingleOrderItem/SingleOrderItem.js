import React from 'react';
import './SingleOrderItem.css'
import swal from 'sweetalert';
const SingleOrderItem = ({ order }) => {
    const { _id, brand, model, price, status } = order;

    const handleCancelMyOrder = (id) => {
        swal("Do you want cancel the order ?")
            .then(value => {
                if (value) {
                    const url = `https://agile-woodland-06952.herokuapp.com/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Good Job!", "Order cancel Successfully!", "success");
                            }
                        })
                }
            })
    }
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
                    <button onClick={() => handleCancelMyOrder(_id)} className="my-btn btn btn-sm">Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default SingleOrderItem;