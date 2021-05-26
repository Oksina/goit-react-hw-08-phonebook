import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../redux/auth/authOperations';
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
                <h1> Register Page</h1>

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

const mapDispatchToProps = {
    onRegister: authOperations.register,
};
export default connect(
    null,
    mapDispatchToProps,
)(RegisterView);
