import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-center'>This is About My Ema-Jhon</h1>
            <p className='text-center'>{user?.email}</p>
        </div>
    );
};

export default About;