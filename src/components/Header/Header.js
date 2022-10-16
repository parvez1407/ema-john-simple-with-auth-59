import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email)
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
                    {
                        user?.uid ?
                            <button onClick={logOut} className='text-white ml-3 hover:text-orange-400'>Log Out</button>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/signup'>SignUp</Link>
                            </>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;