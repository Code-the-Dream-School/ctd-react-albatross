import React from 'react';
import TodoListItem from './TodoListItem.js';

const TodoList = ({ todoList, onRemoveTodo }) => {
    console.log(todoList);
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemoveTodo={onRemoveTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
