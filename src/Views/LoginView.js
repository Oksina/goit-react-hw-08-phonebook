import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../redux/auth/authOperations';
import PropTypes from 'prop-types';
import s from '../components/Contacts/Form/Form.module.css';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (!this.state.email || !this.state.password) {
            alert('Fill the Login form');
            return;
        }

        this.props.onLogin(this.state);

        this.setState({
            email: '',
            password: '',
        });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <h1> Login Page</h1>

                <form
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                    className={s.form}
                >
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
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    onLogin: authOperations.login,
};
export default connect(null, mapDispatchToProps)(LoginView);
