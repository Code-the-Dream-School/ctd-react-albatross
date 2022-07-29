import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {
	const [todoTitle, setTodoTitle] = useState('');

	const handleTitleChange = (event) => {
		const newTodoTitle = event.target.value;
		setTodoTitle(newTodoTitle);
	};

	const handleAddTodo = (event) => {
		event.preventDefault();
		onAddTodo({ title: todoTitle, id: Date.now() });
		setTodoTitle('');
	};

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<InputWithLabel
					todoTitle={todoTitle}
					handleTitleChange={handleTitleChange}>
					<strong>Title:</strong>
				</InputWithLabel>

				<button type='submit' className='btn'>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddTodoForm;
