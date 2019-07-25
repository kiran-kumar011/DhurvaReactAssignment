import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';


import { userLogin } from './actions';

class Login extends Component {
	state = {
		email: '',
		password: '',
		message: '',
		isLoggedIn: false,
		id: null,
	}

	componentDidMount = () => {
		if(this.props.isAuth){
			const {from} = this.props.location.state;
			this.props.history.push(from.pathname);
			
		}
	}

	componentDidUpdate = () => {
		if(this.props.isAuth){
			const {from} = this.props.location.state;
			this.props.history.push(from.pathname);
		}
	}


	handleChange = (e) => {

		this.setState({[e.target.name] : e.target.value, message: '' });
	}


	submitHandler = (e) => {
		e.preventDefault();
		var { email, password } = this.state;
		let data = {
			email,
			password,
		}
		if(!email || !password) {
			this.setState({message: 'please fill the form'});
			return;
		}

		this.props.dispatch(userLogin(data)).then(res => {
			res.success ? 
			this.setState({
				message: res.message,
				isLoggedIn: true, 
				id : res.user.id	
			}) 
			: 
			this.setState({message: res.message})

			if(res.success) {
				console.log('logged in succesfully');
				setTimeout(() => {
					var userId = res.user.id ? res.user.id : ''
					localStorage.setItem('userId', userId);
					if(this.props.isAuth){
						const {from} = this.props.location.state;
						if(from.pathname !== '/') {
							this.props.history.push(from.pathname);
						} else {
							this.props.history.push('/home');
						}
					} 
				}, 1000)
			}
		});
	}

	render() {
		return(
			<div>
				<Nav />
				<form onSubmit={this.submitHandler}>
					<div className='signIn'>
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
							<button className='input button'>Login</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
} 


export default connect((state) => ({isAuth: state.isLoggedIn}))(Login);








