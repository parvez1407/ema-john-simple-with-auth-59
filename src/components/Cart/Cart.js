import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
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
            <div>
                <button>Clear Cart</button>
            </div>
            <div>
                <button>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;