import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList({ todoList, onRemoveTodo }) {
    console.log(todoList)
    return (
        <ul>
            {todoList.map((todo) =>
                <TodoListItem
                    key={todo.id}
                    id={todo}
                    title={todo.title}
                    onRemoveTodo={onRemoveTodo}
                />
            )}
        </ul>
    )
}

export default TodoList;