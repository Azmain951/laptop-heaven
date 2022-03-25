import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import './Laptops.css'

const Laptops = () => {

    const [laptops, SetLaptops] = useState([]);
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => SetLaptops(data))
    }, []);

    const handleAddToWishlist = (laptop) => {
        console.log(laptop.name);
    }

    return (
        <div>
            <h3>Welcome to Laptop Heaven</h3>
            <div className='shop'>
                <div className="laptops-container">
                    {
                        laptops.map(laptop => <Laptop key={laptop.id} laptop={laptop} handleAddToWishlist={handleAddToWishlist}></Laptop>)
                    }
                </div>
                <div className="cart-container">
                    <h3>This is Cart Container</h3>
                </div>
            </div>
        </div>
    );
};

export default Laptops;