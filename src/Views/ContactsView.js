import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Contacts/Form/Form';
import Filter from '../components/Filter/Filter';
import List from '../components/Contacts/List/List';
import contactsOperations from '../redux/Contacts/allContactsOperations';

class ContactsView extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }
    render() {
        return (
            <>
                <Form />
                <h2>Contacts </h2>
                <Filter />
                <List />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchContacts: () =>
        dispatch(contactsOperations.fetchContact()),
});
export default connect(
    null,
    mapDispatchToProps,
)(ContactsView);
