import React from 'react';
import TodoListItem from './TodoListItem.js';
import propTypes from 'prop-types';

const TodoList = ({ todoList, onRemoveTodo }) => {
    TodoList.propTypes = {
        todoList: propTypes.array,
        onRemoveTodo: propTypes.func,
    };

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
