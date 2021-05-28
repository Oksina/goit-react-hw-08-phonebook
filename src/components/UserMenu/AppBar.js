import React from 'react';
import { connect } from 'react-redux';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import authSelectors from '../../redux/auth/authSelectors';
import PropTypes from 'prop-types';

const AppBar = ({ isAuthenticated }) => (
    <header>
        <div>
            <AuthNav />
            {isAuthenticated ? (
                <UserMenu />
            ) : (
                <Navigation />
            )}
        </div>
    </header>
);

AppBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated:
        authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
