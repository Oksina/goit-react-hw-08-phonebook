import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/register" exact>
                Register
            </NavLink>
            <NavLink to="/login" exact>
                Login
            </NavLink>
        </nav>
    );
};

export default Navigation;
