import React from "react";

const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <li>
      <span>{item.title}</span>
      <button onClick={() => onRemoveTodo(item.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;
