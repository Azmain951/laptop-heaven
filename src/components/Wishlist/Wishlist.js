import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Wishlist.css'

const Wishlist = ({ item, removeItem }) => {
    const { id, name, img, price } = item;
    return (
        <div className='wishlist'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>${price}</p>
            <button onClick={() => removeItem(id)}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
        </div>
    );
};

export default Wishlist;