import React, {Component} from 'react';
import { LogoutUser } from './actions';
import { connect } from 'react-redux';
const { NavLink } = require('react-router-dom');

 

class Nav extends Component {

	state = {}

	handleClick = (e) => {
		e.preventDefault();
		localStorage.clear();
		// this.setState({isLoggedOut: true});
		this.props.dispatch(LogoutUser());
	}

	render() {
		return(
			<header>
				<div className='headerWrapper'>
					<ul className='listWrapper'>
						<div>
							<li>
								<NavLink className='basic main' exact activeClassName='active main' to='/home'>
									Scratch
								</NavLink>
							</li>
						</div>
						{
							this.props.isLoggedIn ? 
							(
								<div className='beforeLogin'>
									<li>
										<NavLink className='basic' exact activeClassName='active' to='/profile'>
											Profile
										</NavLink>
									</li>
									<li >
										<NavLink className='basic' exact activeClassName='active' onClick={this.handleClick.bind(this)} to='/logout'>
											Logout
										</NavLink>
									</li>
								</div>
							)
							:
							(
								<div className='beforeLogin'>
									<li>
										<NavLink className='basic' exact activeClassName='active' to='/signup'>
											Signup
										</NavLink>
									</li>
									<li>
										<NavLink className='basic' exact activeClassName='active' to='/login'>
											Login
										</NavLink>
									</li>
								</div>
							)
						}
						
					</ul>
				</div>
			</header>
		)
	}
}


function mapStateToprops(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  }
}

export default connect(mapStateToprops)(Nav);










