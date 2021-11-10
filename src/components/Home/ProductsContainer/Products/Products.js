import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import Product from '../Product/Product';

const Products = () => {
    const { allProduct } = useAuth()
    const { products } = allProduct;
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-3">Featured Car's</h2>
            {products?.length < 1 ?
                <div style={{ height: "100px", display: "flex", alignItems: 'center' }}>
                    <div className="loader mx-auto"></div>
                </div>
                :
                <div className="row">
                    {
                        products?.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            }
        </Container>
    );
};

export default Products;