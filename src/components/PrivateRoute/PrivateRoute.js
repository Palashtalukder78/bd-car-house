import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Redirect } from "react-router-dom";
import { LinearProgress } from '@mui/material';
const PrivateRoute = ({ children, ...rest }) => {
    const { allFirebase } = useAuth();
    const { user, isLoading } = allFirebase;
    if (isLoading) {
        return <LinearProgress color="success" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;