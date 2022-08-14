import React, { useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './TodoListItem.module.css';

function App() {
	const [todoList, setTodoList] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`

	const options = {
		method: 'Get',
		headers: {
			authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
		}
	}

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
					setTodoList(data.records);
					setIsLoading(false);
				})
	});
	
	useEffect(() => {
		if (!isLoading) {
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
			<hr />
			{isLoading ? (
				<p>Loading ...</p>
			) : (
				<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
			)}
		</div>
	);
}

export default App;