import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import { connect } from 'react-redux';
 
var count = 0;
    console.log(++count, 'calld');
const PrivateRouteComponent = ({component: Component, isAuth,  ...rest}) => (
    <Route {...rest} render={(props) =>
    isAuth ? <div>{rest.children}</div> : (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }} /> )
    } />
);



const mapStateToProps = (state, ownProps) => {
    console.log(state, "in orivate route")
    return {
        isAuth: state.isLoggedIn,
        userPrevLocation: ownProps.path,
        routeProps: {
            exact: ownProps.exact,
            path: ownProps.path
        }
    };
};

const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteComponent);
export default PrivateRoute;

