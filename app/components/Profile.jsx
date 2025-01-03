'use client';

import React from 'react'
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function Profile() {
    const { userData } = useContext(UserContext);

    if (!userData) return <div className='bg-yellow-100 p-4 flex flex-row'>User Not Logged in</div>
    else
        return (
            <>
                <div className='bg-yellow-100 p-4 flex flex-row'>
                    User : {userData.username}
                </div>

                <div className='bg-yellow-100 p-4 flex flex-row'>
                    Password : {userData.password}
                </div>
                
            </>
        )
}

export default Profile