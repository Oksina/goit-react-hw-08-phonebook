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
} from './authActions';

const initialUserState = { name: '', email: '' };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => initialUserState,
    [getCurrentUserSuccess]: (_, payload) => payload,
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

const authReducer = combineReducers({
    user,
    token,
    error,
});

export default authReducer;
