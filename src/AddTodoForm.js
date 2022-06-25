import React from 'react';

const AddTodoForm = (props) => {
	//Handle "Add Todo Form"
	const handleAddTodo = (event) => {
		event.preventDefault();
		const todoTitle = event.target.title.value;
		console.log(todoTitle);
		props.onAddTodo(todoTitle);
		event.target.reset();
	};

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<label htmlFor='todoTitle'>Title</label>
				<input id='todoTitle' type='text' name='title'></input>
				<button>Add</button>
			</form>
		</div>
	);
};

export default AddTodoForm;
