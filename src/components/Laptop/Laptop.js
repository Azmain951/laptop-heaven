import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Laptop.css'

const Laptop = ({ laptop, handleAddToWishlist }) => {
    const { name, img, price } = laptop;
    return (
        <div className='laptop-container'>
            <img src={img} alt="" />
            <div className="laptop-details">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToWishlist(laptop)} className='addToWishlist'>
                <p>Add to Wishlist</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Laptop;