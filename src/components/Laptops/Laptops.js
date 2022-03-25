import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';

const Laptops = () => {

    const [laptops, SetLaptops] = useState([]);
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => SetLaptops(data))
    }, []);

    return (
        <div>
            <h3>Welcome to Laptop Heaven</h3>
            <div className="laptops-container">
                {
                    laptops.map(laptop => <Laptop key={laptop.id} laptop={laptop}></Laptop>)
                }
            </div>
            <div className="cart-container">
                <h3>This is Cart Container</h3>
            </div>
        </div>
    );
};

export default Laptops;