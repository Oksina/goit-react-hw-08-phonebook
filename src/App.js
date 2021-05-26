import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/UserMenu/AppBar';
import contactsOperations from './redux/Contacts/allContactsOperations';
import { getLoading } from './redux/Contacts/allContactsSelector';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';
import './App.css';
import * as authOperations from './redux/auth/authOperations';

const HomeView = lazy(() =>
    import(
        './Views/HomeView.js' /*webpackChunkName "home-view"*/
    ),
);
const RegisterView = lazy(() =>
    import(
        './Views/RegisterView.js' /*webpackChunkName "register-view"*/
    ),
);
const LoginView = lazy(() =>
    import(
        './Views/LoginView.js' /*webpackChunkName "login-view"*/
    ),
);
const ContactsView = lazy(() =>
    import(
        './Views/ContactsView.js' /*webpackChunkName "contacts-view"*/
    ),
);

class App extends Component {
    componentDidMount() {
        this.props.fetchContacts();
        this.props.onGetCurrentUser();
    }

    render() {
        return (
            <div className="main">
                <AppBar />
                <h1>Phonebook</h1>
                <Suspense
                    fallback={
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={50}
                            width={50}
                            timeout={3000}
                            className="loader"
                        />
                    }
                >
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={HomeView}
                        />
                        <Route
                            exact
                            path="/register"
                            component={RegisterView}
                        />
                        <Route
                            exact
                            path="/login"
                            component={LoginView}
                        />
                        <Route
                            exact
                            path="/contacts"
                            component={ContactsView}
                        />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoadingContacts: getLoading(state),
    };
};
const mapDispatchToProps = dispatch => ({
    fetchContacts: () =>
        dispatch(contactsOperations.fetchContact()),
    onGetCurrentUser: authOperations.getCurrentUser,
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
