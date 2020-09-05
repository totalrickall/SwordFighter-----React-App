import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './index';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        {/* <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} /> */}
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;