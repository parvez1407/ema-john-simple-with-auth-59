import React from 'react';
import { Form, Link } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    return (
        <div>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <Form className='full-form'>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </Form>
                <p className='mt-4 text-center'>Already have an account? <Link className='text-orange-500' to='/login'> Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;