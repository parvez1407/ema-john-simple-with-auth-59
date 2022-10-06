import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { name, price, quantity, shipping, img, id } = product;
    return (
        <div className='flex my-4 border-2 border-orange-400 rounded-lg p-2 w-2/4 items-center justify-between mx-auto'>
            <div className='flex items-center'>
                <img className='w-28 h-2w-28 rounded-lg' src={img} alt="" />
                <div className='ml-5'>
                    <h3 className='font-semibold'>{name}</h3>
                    <p>Price: <span className='text-orange-500'>${price}</span></p>
                    <p>Shipping: <span className='text-orange-500'>${shipping}</span></p>
                    <p>Quantity: <span className='text-orange-500'>{quantity}</span></p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveItem(id)} className='text-2xl mr-5 text-red-400 bg-red-200 py-3 px-4 rounded-full hover:text-red-600 hover:bg-red-300'>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;