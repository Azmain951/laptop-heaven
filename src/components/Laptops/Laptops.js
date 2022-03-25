import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import Wishlist from '../Wishlist/Wishlist';
import './Laptops.css'

const Laptops = () => {

    const [laptops, SetLaptops] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => SetLaptops(data))
    }, []);

    const handleAddToWishlist = (laptop) => {
        const newWishlist = [...wishlist, laptop];
        setWishlist(newWishlist);
    }

    const clearWishlist = () => {
        setWishlist([]);
    }

    const chooseFromWishlist = () => {
        let finalItem = [];
        const randomItem = wishlist[Math.floor(Math.random() * wishlist.length)];
        finalItem.push(randomItem);
        setWishlist(finalItem);
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
                    <h3>My Wishlist</h3>
                    {
                        wishlist.map(item => <Wishlist item={item}></Wishlist>)
                    }
                    <button onClick={chooseFromWishlist} className='clearWishlist'>
                        <p>Choose One</p>
                    </button>

                    <button onClick={clearWishlist} className='clearWishlist'>
                        <p>Clear Wishlist</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Laptops;