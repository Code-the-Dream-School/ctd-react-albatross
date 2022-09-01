import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            }
        )
            .then((resp) => resp.json())
            .then((data) => {
                setTodoList(data.records);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (isLoading === false) {
            const json = JSON.stringify(todoList);
            localStorage.setItem('todoList', json);
        }
    }, [todoList, isLoading]);

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    const removeTodo = (id) => {
        const newList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newList);
    };

    return (
        <>
            <header>
                <h1>Todo List</h1>
            </header>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? (
                <span>Loading ...</span>
            ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            )}
        </>
    );
};

export default App;


