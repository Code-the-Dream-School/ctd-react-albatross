import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = (props) => {
  const { onAddTodo } = props;

  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    onAddTodo([
      {
        title: todoTitle,
        id: Date.now(),
      },
    ]);

    setTodoTitle("");
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          label="Title"
          id="todoTitle"
          type="text"
          name="title"
          placeholder="Add your todo
          here"
          value={todoTitle}
          onChange={handleTitleChange}
        >
          <strong>Title:</strong>
        </InputWithLabel>
      </form>
    </>
  );
};

export default AddTodoForm;
