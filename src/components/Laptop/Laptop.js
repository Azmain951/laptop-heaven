import React from 'react';
import './Laptop.css'

const Laptop = ({ laptop }) => {
    const { name, img, price } = laptop;
    return (
        <div className='laptop-container'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Laptop;