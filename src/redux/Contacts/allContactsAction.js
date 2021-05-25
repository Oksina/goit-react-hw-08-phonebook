import { createAction } from '@reduxjs/toolkit';

//Create action 'fetch'
export const fetchContactRequest = createAction(
    'contacts/fetchContactRequest',
);
export const fetchContactSuccess = createAction(
    'contacts/fetchContactSuccess',
);
export const fetchContactError = createAction(
    'contacts/fetchContactError',
);

//Create action 'add'
export const addContactRequest = createAction(
    'contacts/addContactRequest',
);
export const addContactSuccess = createAction(
    'contacts/addContactSuccess',
);
export const addContactError = createAction(
    'contacts/addContactError',
);

//Create action 'delete'
export const deleteContactRequest = createAction(
    'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
    'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction(
    'contacts/deleteContactError',
);
