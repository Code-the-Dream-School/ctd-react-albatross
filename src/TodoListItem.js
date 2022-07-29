import React from "react";

const TodoListItem = (props) => {
  const { item, onRemoveTodo } = props;

  return (
    <li>
      <span>{item.title}</span>
      <button onClick={() => onRemoveTodo(item.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;
