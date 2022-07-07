import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
    const [todoList, setTodoList] = useState([]);
    //Remove the newTodo state variable and the corresponding JSX that displays it
    // const [newTodo, setNewTodo] = useState('');
    // Declare a new function named addTodo that takes newTodo as a parameter
    const addTodo = (newTodo) => {
        // Call the setTodoList state setter and use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
        setTodoList([...todoList, newTodo]);
    };
    return (
        <div>
            <h1>Todo List</h1>
            {/* Change the value of the onAddTodo prop for AddTodoForm to addTodo */}
            {/* <AddTodoForm onAddTodo={setNewTodo} /> */}
            <AddTodoForm onAddTodo={addTodo} />
            {/* <p>{newTodo}</p> */}
            <TodoList todoList={todoList} />
        </div>
    );
};

export default App;
