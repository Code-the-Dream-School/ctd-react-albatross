import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem('savedTodoList') || '[]')
    );

    useEffect(() => {
        const json = JSON.stringify(todoList);
        localStorage.setItem('savedTodoList', json);
    }, [todoList]);
    return [todoList, setTodoList];
};

const App = () => {
    const [todoList, setTodoList] = useSemiPersistentState();

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };
    return (
        <>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} />
        </>
    );
};

export default App;
