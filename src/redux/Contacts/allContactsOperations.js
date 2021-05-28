/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './allContactsAction';

// axios.defaults.baseURL =
//     'https://connections-api.herokuapp.com';

const fetchContact = () => dispatch => {
    dispatch(fetchContactRequest());
    axios
        .get('/contacts')
        .then(({ data }) =>
            dispatch(fetchContactSuccess(data)),
        )
        .catch(error =>
            dispatch(fetchContactError(error.message)),
        );
};

const addContact = description => dispatch => {
    const contact = {
        name: description.name,
        number: description.number,
    };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch(addContactSuccess(data)),
        )
        .catch(error =>
            dispatch(addContactError(error.message)),
        );
};

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() =>
            dispatch(deleteContactSuccess(contactId)),
        )
        .catch(error =>
            dispatch(deleteContactError(error.message)),
        );
};

export default { fetchContact, addContact, deleteContact };
