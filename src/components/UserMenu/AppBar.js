import React from 'react';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const AppBar = ({ isAuthenticated }) => (
    <header>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);

export default AppBar;
