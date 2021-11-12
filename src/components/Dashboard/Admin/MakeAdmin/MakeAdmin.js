import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import useAuth from '../../../../hooks/useAuth';
import './MakeAdmin.css'
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
const MakeAdmin = () => {
    const { allUser } = useAuth();
    const { users } = allUser;
    const [email, setEmail] = useState([]);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    useEffect(() => {
        AOS.init();
    }, []);
    const handleMakeAdmin = (e) => {
        const user = { email }
        swal("Do you want Dete this Product ?")
            .then(value => {
                if (value) {
                    fetch('https://agile-woodland-06952.herokuapp.com/users/admin', {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            e.target.reset();
                            swal("Good Job!", "Admin create successfully!", "success");
                        })
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6 my-2" data-aos="fade-right" data-aos-delay="500">
                    <div className="make-admin-form shadow">
                        <form onSubmit={handleMakeAdmin}>
                            <h3 className="text-center my-color">Make Admin</h3>
                            <input onBlur={handleEmail} type="email" className="form-control mb-2" placeholder="Enter email address for make admin" />
                            <div className="d-grid">
                                <button className="btn my-btn">Make Admin</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 my-2" data-aos="fade-left" data-aos-delay="500">
                    <h3 className="my-color">Total users: {users?.length}</h3>
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
                                        <td>{user?.email}</td>
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

export default MakeAdmin;