import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import SelectedItem from '../SelectedItem/SelectedItem';
import Wishlist from '../Wishlist/Wishlist';
import './Laptops.css'

const Laptops = () => {

    const [laptops, SetLaptops] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => SetLaptops(data))
    }, []);

    const handleAddToWishlist = (laptop) => {
        setSelectedItem([]);
        if (wishlist.length < 4) {

            const duplicate = wishlist.find(item => item.id === laptop.id)
            if (duplicate) {
                alert("Can't Add the Same item again!!!")
            }
            else {
                const newWishlist = [...wishlist, laptop];
                setWishlist(newWishlist);
            }
        }
        else {
            alert("Can't add more than 4 items to the wishlist!!!")
        }

    }

    const clearWishlist = () => {
        setWishlist([]);
        setSelectedItem([]);
    }

    const chooseFromWishlist = () => {
        if (wishlist.length > 1) {
            setWishlist([])
            const randomItem = wishlist[Math.floor(Math.random() * wishlist.length)];
            setSelectedItem(randomItem);

        }

        else {
            alert("Please Select minimum two items")
        }
    }

    const removeItem = (id) => {
        const newWishlist = wishlist.filter(item => item.id !== id);
        setWishlist(newWishlist)
    }

    return (
        <div>
            <div className='shop'>
                <div className="laptops-container">
                    {
                        laptops.map(laptop => <Laptop key={laptop.id} laptop={laptop} handleAddToWishlist={handleAddToWishlist}></Laptop>)
                    }
                </div>
                <div className="cart-container">
                    <h3>My Wishlist</h3>
                    {
                        wishlist.map(item => <Wishlist key={item.id} item={item} removeItem={removeItem}></Wishlist>)
                    }
                    <button onClick={chooseFromWishlist} className='clearWishlist'>
                        <p>Choose One</p>
                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    </button>

                    <button onClick={clearWishlist} className='clearWishlist'>
                        <p>Clear Wishlist</p>
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                    <SelectedItem key={selectedItem.id} selectedItem={selectedItem}></SelectedItem>
                </div>
            </div>
        </div>
    );
};

export default Laptops;