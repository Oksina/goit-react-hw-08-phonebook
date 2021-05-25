import axios from 'axios';
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

axios.defaults.baseURL =
    'https://connections-api.herokuapp.com';

//const token = {};

export const register = credentials => async dispatch => {
    dispatch(registerRequest());

    try {
        const response = await axios.post(
            '/users/signup',
            credentials,
        );

        dispatch(registerSuccess(response.data));
    } catch (error) {
        dispatch(registerError(error.message));
    }
};

export const logIn = credentials => async dispatch => {
    dispatch(loginRequest());

    try {
        const response = await axios.post(
            '/users/login',
            credentials,
        );

        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginError(error.message));
    }
};

//export default { register, token };
