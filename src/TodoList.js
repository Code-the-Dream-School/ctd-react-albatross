import React from 'react';
import TodoListItem from "./TodoListItem"
import style from "./TodoList.module.css"

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ol className = {style.ListBox}>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          title={todo.Title}
          onRemoveTodo={onRemoveTodo} />
      ))}
    </ol>
  );
};

export default TodoList;