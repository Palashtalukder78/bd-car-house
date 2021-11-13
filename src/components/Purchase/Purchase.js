import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import './Purchase.css';
import swal from 'sweetalert';
const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { allFirebase } = useAuth();
    const { user, setIsLoading } = allFirebase;
    const history = useHistory();
    useEffect(() => {
        const url = `https://agile-woodland-06952.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    const { brand, model, description, year, milages, price, photo } = product;

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();

    const handleOrder = (e) => {
        setIsLoading(true)
        const customerName = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const order = {
            customerName: customerName,
            email: email,
            address: address,
            phone: phone,
            brand: brand,
            model: model,
            price: price,
            photo: photo,
            status: "pending..."
        }
        fetch('https://agile-woodland-06952.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Awesome", "Your Order Are is Pending... Will be Shifted Soon", "success");
                    history.push('/dashboard/myOrders')
                }
            })
            .finally(() => setIsLoading(false));
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <div className="row my-5 purchase">
                    <div className="col-md-6 py-4 purchase-product-container shadow">
                        {!product?.photo ?
                            <div style={{ height: "500px", display: "flex", alignItems: 'center' }}>
                                <div className="loader mx-auto"></div>
                            </div>
                            :
                            <div>
                                <div className="my-4">
                                    <img className="img-fluid" src={photo} alt="" />
                                </div>
                                <div>
                                    <h3>{brand}</h3>
                                    <h6 className="car-brand">{model}</h6>
                                    <p>{description}</p>
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
                            </div>
                        }
                    </div>
                    <div className="col-md-6 purchase-form-container">
                        <div>
                            <div className="purchase-form shadow">
                                <form onSubmit={handleOrder}>
                                    <h4 className="text-center">Customer Information</h4>
                                    <input className="form-control" defaultValue={user.displayName} ref={nameRef} type="text" required />
                                    <input className="form-control" ref={emailRef} type="email" defaultValue={user?.email} disabled />
                                    <input className="form-control" ref={addressRef} type="text" placeholder="Address" required />
                                    <input className="form-control" ref={phoneRef} type="number" placeholder="Phone Number" required />
                                    <hr />
                                    <h4 className="text-center p-0 m-0">Product Information</h4>
                                    <span className="text-center d-block">You can't changes the Products Info</span>
                                    <input className="form-control" title="You can just see your Choosable product details. you can't modify it" type="text" defaultValue={brand} disabled />
                                    <input className="form-control" title="You can just see your Choosable product details. you can't modify it" type="text" defaultValue={model} disabled />
                                    <input className="form-control" r title="You can just see your Choosable product details. you can't modify it" type="text" defaultValue={milages} disabled />
                                    <input className="form-control" title=" u can just see your Choosable product details. you can't modify it" type="text" defaultValue={year} disabled />
                                    <input className="form-control" title="You can just see your Choosable product details. you can't modify it" type="text" defaultValue={price} disabled />
                                    <div className="d-grid my-3">
                                        <button className=" btn my-btn btn-sm">Order</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Purchase;