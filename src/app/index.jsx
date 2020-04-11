import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from 'src/components/header';
import SignIn from 'src/pages/sing-in';
import SignUp from 'src/pages/sign-up';
import About from 'src/pages/about';
import MainPage from "../pages/main";
import PostPage from "../pages/post";
import NewPost from "../pages/new-post";
import User from "../pages/user";

import * as Actions from './actions';
import './style.css';

class App extends Component {
    componentDidMount() {
        this.props.auth();

    }

    render() {
        return (
            <>
                <Header user={this.props.user} signOut={this.props.signOut}/>
                <Switch>
                    <Route path='/sign-in' exact={true} component={SignIn} />
                    <Route path='/sign-up' exact={true} component={SignUp} />
                    {this.props.user && <Route path='/new-post' exact={true} component={NewPost} />}
                    {this.props.user && <Route path='/user/:id' exact={true} component={User} />}
                    <Route path='/about' exact={true} component={About}  />
                    <Route path='/post/:id' exact={true} component={PostPage} />
                    <Route path='/' exact={true} component={MainPage} />
                </Switch>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        user: state.applicationReducer.user
    });
};


export default connect(mapStateToProps, Actions)(App);
