import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedItem.css'

const SelectedItem = ({ selectedItem }) => {
    const { name, img } = selectedItem;
    return (
        <div className='selectedItem'>
            <h3>Selected Item:</h3>
            <div className='selectedItemDetails'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default SelectedItem;