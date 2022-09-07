import React, { useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import Nav from './Nav'
import TodoList from './TodoList';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [todoList, setTodoList] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

	const options = {
		method: 'Get',
		headers: {
			authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
		},
	};

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				setTodoList(data.records);
				setIsLoading(false);
			});
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
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<div>
							<Nav />
							<h1>Todo List</h1>
							<AddTodoForm onAddTodo={addTodo} />
							{isLoading ? (
								<p>Loading...</p>
							) : (
								<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
							)}
						</div>
					}></Route>
				<Route path='/new' element={<h1>New Todo List</h1>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
