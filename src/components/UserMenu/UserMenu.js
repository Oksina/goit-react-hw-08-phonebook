import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import * as authOperations from '../../redux/auth/authOperations';
import defaultAvatar from './defaultAvatar.jpg';
import s from '../Contacts/Form/Form.module.css';
import PropTypes from 'prop-types';

const UserMenu = ({ avatar, name, onLogout }) => (
    <div>
        <img src={avatar} alt="" width="40" />
        <span>Welcome, {name} </span>
        <button
            type="button"
            onClick={onLogout}
            className={s.button}
        >
            Logout
        </button>
    </div>
);

UserMenu.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserMenu);
