import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useOrders from '../hooks/useOrders';
import useProducts from '../hooks/useProducts';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allFirebase = useFirebase();
    const allProduct = useProducts();
    const allOrder = useOrders();
    return (
        <AuthContext.Provider value={{ allFirebase, allProduct, allOrder }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;