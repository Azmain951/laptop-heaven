import React from 'react';
import './Wishlist.css'

const Wishlist = ({ item }) => {
    const { name, img, price } = item;
    return (
        <div className='wishlist'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>${price}</p>
        </div>
    );
};

export default Wishlist;