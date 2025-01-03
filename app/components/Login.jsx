'use client';

import React from 'react'
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUserData} = useContext(UserContext);

    const handleSubmit = (e) => {
        // TODO implement Submit Action
        e.preventDefault();
        setUserData({username, password});
    }

    return (
        <div className='flex flex-col p-4 bg-gray-400'>
            <h2 className='mb-0 mr-4 text-lg'>Login</h2>

            <div className = 'p-2' >
            <input className='px-7 pb-2.5 pt-3'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
            />
            </div>

            <div className = 'p-2' >
            <input className='px-7 pb-2.5 pt-3'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            </div>

            <div className='p-2'>
                <button onClick={handleSubmit}
                    className="bg-blue-400 inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Login