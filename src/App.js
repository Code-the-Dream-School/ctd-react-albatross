import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.airtable.com/v0/${process.env.appHRMMlaEGzZoSHo}/Default`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${process.env.keyfV6tq5Kc20bvoi}`,
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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<header> 
                    <h1>Todo List</h1>
                </header>} />

                <Route
                    path="/"
                    element={
                        <>
                            <AddTodoForm onAddTodo={addTodo} />
                            {isLoading ? (
                                <span>Loading ...</span>
                            ) : (
                                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                            )}
                        </>
                    }>
                </Route>

                <Route path="/new" element={
                    <header>
                        <h1>New Todo List</h1>
                    </header>

                } />

            </Routes>
        </BrowserRouter>
    );
};

export default App;