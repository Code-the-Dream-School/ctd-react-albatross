import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => {
	const [todoList, setTodoList] = React.useState([]);

	//Add New Todo to List
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
