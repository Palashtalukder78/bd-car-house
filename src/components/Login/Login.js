import React, { useEffect, useState } from 'react';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Container } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const [isToggle, setIstoggle] = useState(false);

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
        console.log(displayName, email, password, retypePassword);
        e.preventDefault();
    }

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div >
            <div>
                <Navigation></Navigation>
            </div>
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
                        <h6 className="text-center mt-2 p-0">OR</h6>
                        <div>
                            <div onClick="{handleGoogleSign} " className="google-signIn shadow">
                                <div>
                                    <GoogleIcon className="google-icon" />
                                </div>
                                <div>
                                    Signin using Google
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;