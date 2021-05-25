import React from 'react';
import Form from '../components/Contacts/Form/Form';
import Filter from '../components/Filter/Filter';
import List from '../components/Contacts/List/List';

const ContactsView = () => {
    return (
        <>
            <Form />
            <h2>Contacts </h2>
            <Filter />
            <List />
        </>
    );
};

export default ContactsView;
