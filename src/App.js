import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => {
	const [todoList, setTodoList] = useState([]);

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	};

	return (
		<div>
			<h1>ToDo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList} />
		</div>
	);
};

export default App;