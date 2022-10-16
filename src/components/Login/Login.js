import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css';
const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <Form onSubmit={handleSubmit} className='full-form'>
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