import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useProducts from '../hooks/useProducts';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allFirebase = useFirebase();
    const allProduct = useProducts();
    return (
        <AuthContext.Provider value={{ allFirebase, allProduct }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;