import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import { connect } from 'react-redux';
 
const PrivateRouteComponent = ({component: Component, isAuth,  ...rest}) => {
    // var auth = false;
    return (
    <Route {...rest} render={(props) =>
    isAuth ? <Component {...props} /> : (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }} /> )
    } />
)
};



const mapStateToProps = ({isLoggedIn}) => ({isAuth: isLoggedIn});

const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteComponent);
export default PrivateRoute;

