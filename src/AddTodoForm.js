import React, { useState } from "react";

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
        <label htmlFor="todoTitle">Title</label>
        <input
          id="todoTitle"
          type="text"
          name="title"
          placeholder="Add your todo here"
          value={todoTitle}
          onChange={handleTitleChange}
        ></input>
        <input type="submit" value="Add"></input>
      </form>
    </>
  );
};

export default AddTodoForm;
