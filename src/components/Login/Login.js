import React, { useEffect, useState } from 'react';
import { Checkbox, CircularProgress, FormControlLabel, TextField } from '@mui/material';
import { Container } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import './Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { allFirebase } = useAuth();
    const { createUser, loginUser, isLoading } = allFirebase;

    const [loginData, setLoginData] = useState({});
    const [isToggle, setIstoggle] = useState(false);

    const history = useHistory();
    const location = useLocation();

    const handleToggle = (e) => {
        setIstoggle(e.target.checked)
    }

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const displayName = loginData.displayName;
    const email = loginData.email;
    const password = loginData.password;
    const retypePassword = loginData.retypePassword;

    const handleForm = (e) => {
        e.preventDefault();
        isToggle ?
            handleLogin(email, password, history, location)
            :
            handleCreateuser(email, password, history, displayName, location)
    }
    const handleCreateuser = () => {
        if (password.length < 6) {
            swal("OOPS", "Password should be 6 Character", "warning");
            return;
        } else if (password !== retypePassword) {
            swal("Fail", "Password Doesn't match", "warning");
            return;
        }
        createUser(email, password, displayName, history, location)
    }
    const handleLogin = () => {
        loginUser(email, password, history, location)
    }
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div >
            <div>
                <Navigation></Navigation>
            </div>
            {isLoading ?
                <div className="text-center" style={{ height: "400px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                    <h3 className="my-color">Wait a few Moments.....</h3>
                    <CircularProgress color="success" />
                </div>
                :
                <Container>
                    <div className="row my-2" data-aos="fade-down" data-aos-delay="400">
                        <div className="col-md-5 mx-auto">
                            <div className="login shadow">
                                <form onSubmit={handleForm}>
                                    <h3>{isToggle ? "Login" : "Create User"}</h3>
                                    {!isToggle &&
                                        <TextField
                                            className="input-field"
                                            name="displayName"
                                            id="standard-basic"
                                            label="Full Name"
                                            onBlur={handleOnBlur}
                                            variant="standard" />}
                                    <TextField
                                        className="input-field"
                                        id="standard-basic"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        className="input-field"
                                        id="standard-basic"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    {!isToggle &&
                                        <TextField
                                            className="input-field"
                                            id="standard-basic"
                                            name="retypePassword"
                                            label="Retype Password"
                                            type="password"
                                            onBlur={handleOnBlur}
                                            variant="standard" />}
                                    <div className="d-grid">
                                        <button type="submit" className="btn my-btn">{isToggle ? "Login User" : "Create an Account"}</button>
                                    </div>
                                    <div className="flexible checkbox">
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            labelPlacement="end"
                                            style={{ margin: ' 0 0 0 0', color: "black", fontSize: "18px" }}
                                            label="Already Registered?"
                                            onChange={handleToggle}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            }
        </div>
    );
};

export default Login;