import React, { useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import SingleOrderItem from './SingleOrderItem/SingleOrderItem';
import AOS from 'aos';
import 'aos/dist/aos.css';
const MyOrders = () => {
    const { allFirebase, allOrder } = useAuth();
    const { user } = allFirebase;
    const { orders } = allOrder;

    const currentUser = user?.email;
    const myOrders = orders.filter(order => order?.email === currentUser);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-down" data-aos-delay="500">
            <h3>My Orders:{myOrders.length}</h3>
            <div className="row">
                {
                    myOrders?.map(order => <SingleOrderItem
                        key={order._id}
                        order={order}
                    ></SingleOrderItem>)
                }
            </div>
        </div>

    );
};

export default MyOrders;