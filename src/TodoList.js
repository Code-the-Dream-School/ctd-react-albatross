import React from 'react';
import TodoListItem from './TodoListItem.js';

const todoList = [
    {
        id: 1,
        title: 'Create Empty Array',
    },
    {
        id: 2,
        title: 'Create 3 objects',
    },
    {
        id: 3,
        title: 'Complete assignment',
    },
];

const TodoList = () => {
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoListItem key={todo.id} title={todo.title} />
            ))}
        </ul>
    );
};

export default TodoList;
