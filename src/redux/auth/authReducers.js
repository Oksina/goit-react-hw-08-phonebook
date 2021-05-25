import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
} from './authActions';

const initialUserState = { name: '', email: '' };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
    [registerError]: (_, { payload }) => payload,
    [loginError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
    user,
    token,
    error,
});

export default authReducer;
