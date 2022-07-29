const TodoListItem = ({ todo, onRemoveTodo }) => {
	return (
		<div>
			<li>
				{todo.title}
				<button type='btn' onClick={() => onRemoveTodo(todo.id)}>
					Remove
				</button>
			</li>
		</div>
	);
};

export default TodoListItem;
