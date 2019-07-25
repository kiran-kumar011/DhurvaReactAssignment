
import Users from './../database/users.json';
// console.log(Users, '............');

export function getAllUsers() {
	return dispatch => new Promise((resolve, reject) => {
		dispatch({
			type: 'ADD_USERS_DATA',
			data: Users,
		})
		resolve({ success: true });
	})
}

export function verifyUserToken(data) {
	return dispatch => new Promise((resolve, reject) => {
		var success	= false;
		var user = Users.find(user => user.id === +data);
		console.log(data, user, 'write the function to handle user verification');
		if(user.email) {
			success = true;
			dispatch({
				type: 'LOGED_IN',
				data: success,
			});

			dispatch({
				type: 'LOGGEIN_USER',
				data: user,
			});
			resolve({success})
		} else {
			resolve({success})
		}
	})
}


export function userLogin(data) {
	return dispatch => new Promise((resolve, reject) => {
		console.log(data,'after user login')
		var success	= false;
		var message = '';
			
		var user = Users.find((user, index) => user.email === data.email);

		if(user.password === data.password) {
			message = 'logged in succesfully';
			success = true;
			dispatch({
				type: 'LOGED_IN',
				data: success,
			});
			dispatch({
				type: 'LOGGEIN_USER',
				data: user,
			})
		} else {
			message = 'password did not matched';
		}

		resolve({
			success,
			message,
			user
		})
	})
}


export function LogoutUser() {
	return dispatch => new Promise((resolve, reject) => {
		dispatch({
			type: 'LOG_OUT',
			data: false,
		})
	})
}


export function addNewTodo(data) {
	return dispatch => new Promise((resolve, reject) => {
		console.log(data);
		dispatch({
			type: 'ADD_TODO',
			data: data,
		})
	})
}

export function toggleTodo(data) {
	return dispatch =>  {
		dispatch({
			type: 'TOGGLE_TODO',
			id: data,
		})
	}
}

export function removeTodo(data) {
	return dispatch => {
		dispatch({
			type: 'REMOVE_TODO',
			id: data,
		})
	}
}










