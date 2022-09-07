import style from "./TodoListItem.module.css"

const TodoListItem = ({ todo, onRemoveTodo }) => {
	return (
		<div className={style.listItemContainer}>
			<li className={style.ListItem}>
				{todo.fields.Title}
				<button type='btn' onClick={() => onRemoveTodo(todo.id)}>
					Remove
				</button>
			</li>
		</div>
	);
};

export default TodoListItem;
