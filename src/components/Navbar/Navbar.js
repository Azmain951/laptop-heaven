import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>Laptop Heaven</h2>
            <div>
                <a href="/laptops">Laptops</a>
                <a href="/wishlist">Wishlist</a>
                <a href="/about">About Us</a>
            </div>
        </div>
    );
};

export default Navbar;