import { useEffect, useState } from 'react';

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://agile-woodland-06952.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    return {
        orders,
        setOrders
    }
};

export default useOrders;