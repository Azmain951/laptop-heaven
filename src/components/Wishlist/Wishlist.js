import React from 'react';
import './Wishlist.css'

const Wishlist = ({ item }) => {
    const { name, img } = item;
    return (
        <div className='wishlist'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Wishlist;