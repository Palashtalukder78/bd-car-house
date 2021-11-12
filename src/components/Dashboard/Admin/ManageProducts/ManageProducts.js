import React, { useEffect } from 'react';
import Table from 'react-bootstrap/esm/Table';
import useAuth from '../../../../hooks/useAuth';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ManageProducts = () => {
    const { allProduct } = useAuth();
    const { products } = allProduct;
    useEffect(() => {
        AOS.init();
    }, []);
    const handleProductDelete = (id) => {
        swal("Do you want Dete this Product ?")
            .then(value => {
                if (value) {
                    const url = `https://agile-woodland-06952.herokuapp.com/products/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Good Job!", "Product Delete Successfully!", "success");
                            }
                        })
                }
            })
    }
    return (
        <div style={{ overflowX: "hidden" }} data-aos="fade-down" data-aos-delay="500">
            <h3>All Cars: {products?.length}</h3>
            <div className="row">
                <div className="col">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Milages</th>
                                <th>Price</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr>
                                        <td>{product?.brand}</td>
                                        <td>{product?.model}</td>
                                        <td>{product?.year}</td>
                                        <td>{product?.milages} km</td>
                                        <td>${product?.price}</td>
                                        <td className="text-center">
                                            <button onClick={() => handleProductDelete(product._id)} className="btn my-btn btn-sm">Delete</button>
                                        </td>
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

export default ManageProducts;