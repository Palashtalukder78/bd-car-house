import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
const AdminRoute = ({ children, ...rest }) => {
    const { allFirebase } = useAuth();
    const { user, isLoading, admin } = allFirebase;
    if (isLoading) {
        <div style={{ height: "500px", display: "flex", alignItems: 'center' }}>
            <div className="loader mx-auto"></div>
        </div>
        return;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;