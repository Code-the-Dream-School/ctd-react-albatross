import React from 'react';

const TodoListItem = (props) => {
	return (
		<div>
			<li> {props.todo.title} </li>
		</div>
	);
};

export default TodoListItem;
