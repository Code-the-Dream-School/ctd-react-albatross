import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import style from "./AddTodoForm.module.css"
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState("")

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel className={style.InputField}  todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
            <button className={style.AddButton} type="submit">+</button>
        </form>
    );
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
  };
  
export default AddTodoForm;

