import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList }) => {
	return (
		<div>
			<ul>
				{todoList.map((todo) => (
					<TodoListItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
