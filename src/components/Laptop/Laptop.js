import React from 'react';

const Laptop = ({ laptop }) => {
    const { name, img, price } = laptop;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Laptop;