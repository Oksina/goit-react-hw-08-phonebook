import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../redux/auth/authOperations';
import PropTypes from 'prop-types';
import s from '../components/Contacts/Form/Form.module.css';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (
            !this.state.name ||
            !this.state.email ||
            !this.state.password
        ) {
            alert('Fill the Registration form');
            return;
        }

        this.props.onRegister(this.state);

        this.setState({
            name: '',
            email: '',
            password: '',
        });
    };

    render() {
        const { name, email, password } = this.state;
        return (
            <div>
                <h1> Registration Page</h1>

                <form
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                    className={s.form}
                >
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter name"
                            value={name}
                            onChange={this.handleChange}
                            className={s.input}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="text"
                            name="email"
                            required
                            placeholder="Enter email"
                            value={email}
                            onChange={this.handleChange}
                            className={s.input}
                        />
                    </label>

                    <label>
                        Password
                        <input
                            type="text"
                            name="password"
                            required
                            placeholder="Enter password"
                            value={password}
                            onChange={this.handleChange}
                            className={s.input}
                        />
                    </label>
                    <button
                        type="submit"
                        className={s.button}
                    >
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

RegisterView.propTypes = {
    onRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    onRegister: authOperations.register,
};
export default connect(
    null,
    mapDispatchToProps,
)(RegisterView);
