import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import useAuth from '../../../../hooks/useAuth';
import swal from 'sweetalert';
const ManageAllOrder = () => {
    const { allOrder } = useAuth();
    const { orders } = allOrder;

    const handleMakeShiped = (id) => {
        swal("Do you sure to Shiped this order ?")
            .then((value) => {
                if (value) {
                    const url = `https://agile-woodland-06952.herokuapp.com/orders/${id}`;
                    fetch(url, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(orders)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount === 1) {
                                swal("Shiped", "The Order are shiped now !!", "success");
                            }
                        })
                }
            })
    }
    return (
        <div>
            <h3>Orders: {orders?.length}</h3>
            <div className="row">
                <div className="col-12">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => (
                                    <tr>
                                        <td>{order?.customerName}</td>
                                        <td>{order?.email}</td>
                                        <td>{order?.phone}</td>
                                        <td>{order?.brand}</td>
                                        <td>{order?.model}</td>
                                        <td>{order?.status}</td>
                                        {order?.status === "Shiped" ?
                                            <td className="text-center">
                                                Completed
                                            </td>
                                            :
                                            <td className="text-center">
                                                <button onClick={() => handleMakeShiped(order?._id)} className="btn my-btn btn-sm">Make Shiped</button>
                                            </td>
                                        }
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

export default ManageAllOrder;