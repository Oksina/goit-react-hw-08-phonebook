import {
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import contactsReducer from './Contacts/allContactsReducer';
import filterReducer from './Filter/filterReducer';
import authReducer from './auth/authReducers';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
            ],
        },
    }),
    logger,
];

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
