import React from 'react';
import { Form, Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <Form className='full-form'>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </Form>
            <p className='mt-4 text-center'>New to ema john? <Link className='text-orange-400 underline' to='/signup'> Create a New Account</Link></p>
        </div>
    );
};

export default Login;