import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../../../redux/Contacts/allContactsOperations';
import s from './ListItem.module.css';

const ListItem = ({ contacts, onDeleteContact }) => {
    return contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
            <p className={s.name}>{name}: </p>
            <p>{number} </p>
            <button
                type="button"
                onClick={() => onDeleteContact(id)}
                className={s.button}
            >
                Delete
            </button>
        </li>
    ));
};
ListItem.defaultProps = {
    name: '',
    number: '',
    id: '',
};
ListItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id =>
        dispatch(contactsOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);
