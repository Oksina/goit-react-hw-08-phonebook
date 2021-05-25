import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../../redux/Contacts/allContactsOperations';
import { getAllContacts } from '../../../redux/Contacts/allContactsSelector';
import s from './Form.module.css';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        const { contacts, onSubmit } = this.props;

        if (
            contacts.find(
                contact =>
                    contact.name.toLowerCase() ===
                    name.toLowerCase(),
            )
        ) {
            return alert(`${name} is already in contacts`);
        }
        if (
            contacts.find(
                contact =>
                    contact.number.toLowerCase() ===
                    number.toLowerCase(),
            )
        ) {
            return alert(
                `${number} is already in contacts`,
            );
        }
        onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        const { handleSubmit, handleChange } = this;

        return (
            <form
                onSubmit={handleSubmit}
                className={s.form}
            >
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                        className={s.input}
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="^[\+?\0-9\-_]+$"
                        required
                        placeholder="Number"
                        value={number}
                        onChange={handleChange}
                        className={s.input}
                    />
                </label>
                <button type="submit" className={s.button}>
                    Add contact
                </button>
            </form>
        );
    }
}

Form.propTypes = { onSubmit: PropTypes.func };

const mapStateToProps = state => ({
    contacts: getAllContacts(state),
});
const mapDispatchToProps = dispatch => ({
    onSubmit: e =>
        dispatch(contactsOperations.addContact(e)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form);
