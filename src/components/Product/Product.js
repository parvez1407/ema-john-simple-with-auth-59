import React from 'react';
import './Product.css';

const Product = (props) => {
    const { category, id, img, name, price, quantity, ratings, ratingsCount, seller, shopping, stock } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer : {seller}</p>
                <p className='product-ratings'>Rating : {ratings} start</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;