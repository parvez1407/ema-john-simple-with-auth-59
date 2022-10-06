import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div className='nav-item'>
                    <Link to='/'>Shop</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/orderReview'>Order Review</Link>
                    <Link to='/inventory'>Manage Inventory</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;