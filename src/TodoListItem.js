import React from "react";

const TodoListItem = (props) => {
  const { item } = props;

  return (
    <li>
      <span>{item.title}</span>
    </li>
  );
};

export default TodoListItem;
