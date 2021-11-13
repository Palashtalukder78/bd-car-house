import React from 'react';
import { Route, Redirect, NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
const AdminRoute = ({ children, ...rest }) => {
    const { allFirebase } = useAuth();
    const { user, isLoading, admin } = allFirebase;

    /* if (isLoading) {
        return (
            <div style={{ height: "500px", display: "flex", alignItems: 'center' }}>
                <div className="loader mx-auto"></div>
            </div>
        )
    }
 */
    if (!admin) {
        return (
            <div className="text-center" style={{ height: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h1>!</h1>
                <h1>You are in a wrong place.</h1>
                <h3>Only Admin are able to access for this Page</h3>
                <NavLink to="/dashboard">
                    <button className="btn my-btn">Back to Dashboard</button>
                </NavLink>
            </div>
        )
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