import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

class Signup extends Component {

	state = {
		email: '',
		password: '',
		name: '',
	}

	handleChange = (e) => {
		this.setState({[e.target.name] : e.target.value})
	}

	render() {
		return(
			<div>
				<Nav />
				<form >
					<div className='signIn'>
						<label>name</label>
						<input className='input focus' type='text' name='name' value={this.state.name} 
						onChange={this.handleChange}/>
						<label>email</label>
						<input className='input focus' type='email' name='email' value={this.state.email} 
						onChange={this.handleChange}/>					
						<label>password</label>
						<input className='input' type='password'
						name='password' value={this.state.password}
						onChange={this.handleChange}/>				
						{
							this.state.message ? <h1 className={this.state.isLoggedIn ? 'green': 'red'}>{this.state.message}</h1> : ''
						}
						<div>
							<button className='input button'>Signup</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
} 


export default connect()(Signup);