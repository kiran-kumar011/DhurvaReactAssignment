import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import { addNewTodo, toggleTodo, removeTodo } from './actions';

class Home extends Component {
	state = {
		todo : '',
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	submitNewTodo = (e) => {
		if(!this.state.todo.trim()) {
			return;
		}

		var uuid = function() {
  		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
   		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    	return v.toString(16);
  	});
}

		const data = {
			todo: this.state.todo,
			isComplete: false,
			id: uuid(),
		}
		this.setState({todo: ''});

		this.props.dispatch(addNewTodo(data));
	}

	keyPress = (e) => {
		if(e.keyCode === 13) {
			this.submitNewTodo(e);
		}
	}

	toggleTodo = (e) => {
		console.log(e.target.id);
		this.props.dispatch(toggleTodo(e.target.id));

	}

	removeTodo = (e) => {
		console.log(e.target.id);
		this.props.dispatch(removeTodo(e.target.id))
	}


	render() {
		var todos = this.props.todos ? this.props.todos : [];
		return(
			<div>
				<Nav />
				<main className='todos-wrapper'>
				<div className='description'>
					<h1>Scratch</h1>
					<p>A simple note taking app</p>
				</div>
				<div className='list-container'>
					<h1>To do:</h1>
					{
						todos.length !== 0 ? 
						(
							<ul className='todos-container'>
								{
									todos.map((todo, index) => {
										return (
											<li className={index === todos.length-1 ? 'last-todo':'todo'} key={index}>
												<p className='todo-text'>{todo.todo}</p>
												{
													todo.isComplete ? 
													<i onClick={this.toggleTodo}  id={todo.id} className="fas fa-check-square"></i> 
													:
													<div className='checkbox'   id={todo.id} onClick={this.toggleTodo}></div>
												}
												
												<i onClick={this.removeTodo} id={todo.id} className="fas fa-window-close"></i>
											</li>
										)
									})
								}
							</ul>
						) 
						:
						'' 
					}
					<div className='add-input-wrapper'>
						<label>
							Task
						</label>
						<input type='text' className='input add-todo' name='todo' onKeyDown={this.keyPress}
							placeholder='What do you nee to do?' onChange={this.handleChange} value={this.state.todo}/>
					</div>
					<button onClick={this.submitNewTodo} className='submit-todo'>Save item</button>
				</div>
				</main>
			</div>
		)
	}
} 


function mapStateToProps(state) {
	return {
		todos: state.allToDos
	}
}

export default connect(mapStateToProps)(Home);







