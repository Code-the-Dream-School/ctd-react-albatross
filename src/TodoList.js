import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList({ todoList }) {
    return (
        <ul>
            {todoList.map((todo) =>
                <TodoListItem key={todo.id} title={todo.title} />
            )}
        </ul>
    )
}

export default TodoList;