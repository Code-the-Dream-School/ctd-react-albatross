import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import style from "./AddTodoForm.module.css";
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    //set todoTitle to given value from event
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    //prevent page refresh
    event.preventDefault();
    //invoke callback prop onAddTodo and pass todoTitle from state
    onAddTodo([
      {
        title: todoTitle,
        id: Date.now(),
      },
    ]);
    //reset todoTitle value to an empty String
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

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
