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

    const removeTodo = (id) => {
        const newList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newList);
    };

    return (
        <>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        </>
    );
};

export default App;
