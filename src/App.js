import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/UserMenu/AppBar';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';
import './App.css';
import * as authOperations from './redux/auth/authOperations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

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
                        <PublicRoute
                            exact
                            path="/"
                            restricted
                            component={HomeView}
                        />
                        <PublicRoute
                            exact
                            path="/register"
                            restricted
                            redirectTo="/contacts"
                            component={RegisterView}
                        />
                        <PublicRoute
                            exact
                            path="/login"
                            restricted
                            redirectTo="/contacts"
                            component={LoginView}
                        />
                        <PrivateRoute
                            exact
                            path="/contacts"
                            redirectTo="/login"
                            component={ContactsView}
                        />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

const mapDispatchToProps = () => ({
    onGetCurrentUser: authOperations.getCurrentUser,
});
export default connect(null, mapDispatchToProps)(App);
