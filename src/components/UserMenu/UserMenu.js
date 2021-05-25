import React from 'react';

const UserMenu = ({ email, onLogout }) => (
    <div>
        <span>Welcome, {email}</span>
        <button type="button" onClick={onLogout}>
            Logout
        </button>
    </div>
);

export default UserMenu;
