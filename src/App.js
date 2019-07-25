import React, { Component } from 'react';
// import Users from './database/users.json';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import { getAllUsers, verifyUserToken } from './actions';


import Login from './Login';
import Signup from './Signup';
import Nav from './Nav';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import Profile from './Profile';


class App extends Component {

  state = {
    isLoggedIn: false,
  }

  componentDidMount() {
    this.props.dispatch(getAllUsers()).then(res => {
      const token = localStorage.getItem('userId');
      if(res.success && token) {
        this.props.dispatch(verifyUserToken(token)).then(res => {
          console.log('.......after verification', res)

          this.setState({isLoggedIn: true});
        });
      } 
    })
  }

  
  render() {
    console.log('.......render verification', this.props.isLoggedIn)
    return (

      <Router>
        <Route exact path='/' component={ Nav }></Route>
        <Route  path='/home' component={ Home }></Route>
        <Route  path='/login' component={ Login }></Route>
        <Route  path='/signup' component={ Signup }></Route>
        <Route  path='/profile' component={ Profile }></Route>
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/' component={Nav} />
        <PrivateRoute exact path='/profile' component={Profile} />
      </Router>
    )
  }
}

function mapStateToprops(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  }
}

export default connect(mapStateToprops)(App);
