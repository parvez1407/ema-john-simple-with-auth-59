import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email)
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div className='nav-item'>
                    <Link to='/'>Shop</Link>
                    <Link to='/orders'>Order</Link>
                    <Link to='/orderReview'>Order Review</Link>
                    <Link to='/inventory'>Manage Inventory</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>SignUp</Link>
                    <span className='text-white'>{user?.email}</span>
                </div>
            </nav>
        </div>
    );
};

export default Header;