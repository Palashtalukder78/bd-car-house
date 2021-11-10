import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
    const { allFirebase } = useAuth();
    const { user, isLoading } = allFirebase;
    if (isLoading) {
        return (
            <div style={{ height: "500px", display: "flex", alignItems: 'center' }}>
                <div className="loader mx-auto"></div>
            </div>
        )
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