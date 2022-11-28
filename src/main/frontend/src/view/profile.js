import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    let navigate = useNavigate();

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={() => {
                navigate('/');
            }}>Go Home</button>
        </div>
    )
}

export default Profile;