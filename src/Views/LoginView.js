import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../redux/auth/authOperations';
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

        this.props.onLogin(this.state);

        this.setState({
            name: '',
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
                            type="email"
                            name="name"
                            value={email}
                            onChange={this.handleChange}
                            className={s.input}
                        />
                    </label>

                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
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

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginView);
