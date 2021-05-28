import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    registerSuccess,
    registerError,
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
    getCurrentUserSuccess,
    getCurrentUserError,
    getCurrentUserRequest,
} from './authActions';

const initialUserState = { name: '', email: '' };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => initialUserState,
    [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: (_, { payload }) => payload.token,
    [logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [registerError]: setError,
    [loginError]: setError,
    [logoutError]: setError,
    [getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [getCurrentUserSuccess]: () => true,
    [getCurrentUserRequest]: () => true,
    [registerError]: () => false,
    [loginError]: () => false,
    //[logoutError]: () => false,
    [getCurrentUserError]: () => false,
    [logoutSuccess]: () => false,
});

const authReducer = combineReducers({
    user,
    isAuthenticated,
    token,
    error,
});

export default authReducer;
