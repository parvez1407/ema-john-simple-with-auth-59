import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css';
const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length < 6) {
            setError('Password should be 6 characters or more.')
            return;
        }

        if (password !== confirm) {
            setError('Your password did not match.')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(error => console.error('error: ', error))
    }
    return (
        <div>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                        <p className='text-red-400 text-right mr-10'>{error}</p>
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