import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = ({ cart, clearCart, children }) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4 className='cart-title'>Order Summary</h4>
            <div className='cart-info'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
            </div>
            <p className='total-cost'>Grand Total: {grandTotal.toFixed(2)}</p>
            <div className='mt-4 flex justify-between p-2 items-center text-center m-1 bg-red-400 hover:bg-red-500 py-2 rounded-md text-white'>
                <button onClick={clearCart}>Clear Cart</button>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </div>
            <div className='mt-2 mb-3 flex justify-between p-2 items-center text-center m-1 bg-orange-400 hover:bg-orange-500 py-2 rounded-md text-white'>
                <button>Proceed Checkout</button>
                <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Cart;