import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
    <div>
        <NavLink to="/" exact>
            Home
        </NavLink>
        <NavLink to="/contacts" exact>
            Contacts
        </NavLink>
    </div>
);

export default AuthNav;
