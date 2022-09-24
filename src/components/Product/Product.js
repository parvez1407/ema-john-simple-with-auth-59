import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { img, name, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer : {seller}</p>
                <p className='product-ratings'>Rating : {ratings} start</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;
