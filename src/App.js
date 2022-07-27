import React, { useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './TodoListItems.module.css'

function App() {
	const [todoList, setTodoList] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		new Promise((resolve) =>
			setTimeout(
				() =>
					resolve({
						data: {
							todoList: JSON.parse(localStorage.getItem('savedTodoList')),
						},
					}),
				2000
			)
		).then((results) => {
			setTodoList(results.data.todoList);
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		if (isLoading === false) {
			localStorage.setItem('savedTodoList', JSON.stringify(todoList));
		}
	}, [todoList, isLoading]);

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	};

	const removeTodo = (id) => {
		const removeNewToDo = todoList.filter((list) => list.id !== id);
		setTodoList(removeNewToDo);
	};

	return (
		<div>
			<h1>ToDo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			{isLoading ? (
				<p>Loading ...</p>
			) : (
				<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
			)}
		</div>
	);
}

export default App;
