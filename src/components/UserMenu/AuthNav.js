import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

const AuthNav = ({ isAuthenticated }) => (
    <nav>
        <NavLink to="/" exact>
            Home
        </NavLink>
        {isAuthenticated && (
            <NavLink to="/contacts" exact>
                Contacts
            </NavLink>
        )}
    </nav>
);

const mapStateToProps = state => ({
    isAuthenticated:
        authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(AuthNav);
