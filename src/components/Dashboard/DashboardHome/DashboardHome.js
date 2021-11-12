import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
const DashboardHome = () => {
    const { allOrder, allFirebase } = useAuth();
    const { orders } = allOrder;
    const { admin, user } = allFirebase;
    useEffect(() => {
        AOS.init();
    }, []);
    const currentUser = user?.email;
    const currentUsersOrders = orders?.filter(order => order.email === currentUser)
    return (
        <div data-aos="fade-down" data-aos-delay="500">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="text-center">
                        <h1>Welcome <span className="my-color">{user?.displayName}</span></h1>
                        <h5>Email: {user?.email}</h5>
                        {!admin ?
                            <Box>
                                <h4>Total Orders : {currentUsersOrders?.length}</h4>
                                <Link to="/dashboard/myOrders">
                                    <button className="btn btn-sm my-btn">My Order History</button>
                                </Link>
                            </Box>
                            :
                            <Link to="/dashboard/manageProducts">
                                <button className="btn btn-sm my-btn">Manage Products</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;