
export function Users(state=[], action) {
	switch(action.type) {
		case "ADD_USERS_DATA" :
			return action.data;
		default: 
			return state;
	}
}

export function isLoggedIn(state = null, action) {
	switch(action.type) {
		case 'LOGED_IN':
			return action.data;
		case 'LOG_OUT':
			return action.data;
		default: 
			return state;
	}
}

export function loggedInUser(state={}, action) {
	switch(action.type) {
		case 'LOGGEIN_USER':
			return action.data
		default: 
			return state;
	}
}


export function allToDos(state=[], action) {
	switch(action.type) {
		case 'ADD_TODO':
			return [...state, action.data];
		case 'TOGGLE_TODO':
			var newState =	[...state].map((todo, ind) => {
				if(action.id == todo.id) {
					return {...todo, isComplete: !todo.isComplete}
				} else {
					return todo;
				}
			})
			return newState;
		case 'REMOVE_TODO':
			var newState = [...state].filter(todo => action.id !== todo.id)
			return newState;
		default: 
			return state;
	}
}










