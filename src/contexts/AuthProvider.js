import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useOrders from '../hooks/useOrders';
import useProducts from '../hooks/useProducts';
import useReviews from '../hooks/useReviews';
import useUsers from '../hooks/useUsers';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allFirebase = useFirebase();
    const allProduct = useProducts();
    const allOrder = useOrders();
    const allUser = useUsers();
    const allReviews = useReviews();
    return (
        <AuthContext.Provider value={{ allFirebase, allProduct, allOrder, allUser, allReviews }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;