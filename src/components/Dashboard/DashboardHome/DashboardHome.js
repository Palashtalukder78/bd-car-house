import React from 'react';
import Table from 'react-bootstrap/Table'
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { allOrder, allUser } = useAuth();
    const { orders } = allOrder;
    const { users } = allUser;
    return (
        <div>
            <div className="row" >
                <div className="col-md-8">
                    <h3>Orders: {orders?.length}</h3>
                    <Table responsive striped bordered hover >
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Phone</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => (
                                    <tr>
                                        <td>{order?.customerName}</td>
                                        <td>{order?.phone}</td>
                                        <td>{order?.brand}</td>
                                        <td>{order?.model}</td>
                                        <td>{order?.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="col-md-4">
                    <h3>Users: {users?.length}</h3>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map(user => (
                                    <tr>
                                        <td>{user?.displayName}</td>
                                        <td>{user?.role}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;