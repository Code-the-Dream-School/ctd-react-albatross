import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

//Above the App functional component, create a new function named useSemiPersistentState which will be a custom hook
const useSemiPersistentState = () => {
    const [todoList, setTodoList] = useState(
        //          Update the default state for todoList to read your "savedTodoList" item from localStorage
        // Hint: localStorage.getItem method
        //Update your default state to parse the value of the "savedTodoList" item
        // Hint: JSON.parse method
        JSON.parse(localStorage.getItem('savedTodoList') || '[]')
    );
    //Define a useEffect React hook with todoList as a dependency
    //Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
    useEffect(() => {
        // Update your side-effect function to convert todoList to a string before saving in localStorage. Hint: JSON.stringify method
        const json = JSON.stringify(todoList);
        //Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList", Hint: localStorage.setItem method
        localStorage.setItem('savedTodoList', json);
    }, [todoList]);
    // Add a return statement in useSemiPersistentState that returns the todoList state variable and setter in an Array (just like how it's returned from the useState hook)
    return [todoList, setTodoList];
};

const App = () => {
    //Update App to use the new custom hook
    // Hint: Copy the useState hook from before, but change useState to the custom hook useSemiPersistentState (no arguments)
    const [todoList, setTodoList] = useSemiPersistentState();

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };
    return (
        //Open /src/App.js and update the JSX to use a Fragment
        <>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} />
        </>
    );
};

export default App;
