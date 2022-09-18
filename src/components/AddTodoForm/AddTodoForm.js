import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import style from "./AddTodoForm.module.css";

const AddTodoForm = ({ onAddTodo }) => {
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
      <form onSubmit={handleAddTodo} className={style.form}>
        <InputWithLabel
          label="Title"
          id="todoTitle"
          type="text"
          name="title"
          placeholder="Add new todo"
          value={todoTitle}
          onChange={handleTitleChange}
        ></InputWithLabel>
      </form>
    </>
  );
};

export default AddTodoForm;
