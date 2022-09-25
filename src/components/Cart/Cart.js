import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div>
            <h4 className='cart-title'>Order Summary</h4>
            <div className='cart-info'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${ }</p>
                <p>Total Shipping Charge: ${ }</p>
                <p>Tax: ${ }</p>
            </div>
            <p className='total-cost'>Grand Total: { }</p>
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