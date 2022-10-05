import React, { useState } from "react";
import PropTypes from "prop-types";

import InputWithLabel from "./InputWithLabel";


const AddTodoForm = ({ onAddTodo }) => {

    AddTodoForm.propTypes = {
        onAddTodo: PropTypes.func,
    };

    const [todoTitle, setTodoTitle] = useState("")

    // const handleAddTodo = async (event) => {

    //     event.preventDefault();
    //     // const todoTitle = event.target.title.value;
    //     // console.log(todoTitle);
    //     // event.target.reset();

    //     if (todoTitle !== "") {
    //         await addDoc(collection(db, "todos"), {
    //             todoTitle,
    //             completed: false,
    //         });
    //         setTodoTitle("");
    //     };

    //     let listTodo = {
    //         title: todoTitle,
    //         id: Date.now(),
    //         num: 33
    //     }

    //     console.log(listTodo.title)
    //     onAddTodo(listTodo);
    //     setTodoTitle('');
    // }

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    AddTodoForm.propTypes = {
        onAddTodo: PropTypes.func,
    };

    const handleAddTodo = (event) => {
        event.preventDefault();

        let listTodo = {
            id: Date.now(),
            title: todoTitle,
        };

        onAddTodo(listTodo);
        console.log(listTodo.title)

        setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                onChange={handleTitleChange}
                children
                inputRef
            >
                Title:
            </InputWithLabel>
            {/* <label htmlFor="todoTitle">
                Title
            </label>
            <input name="title" id="todoTitle" value={todoTitle} onChange={handleTitleChange}></input> */}
            <button>Add</button>
        </form>
    )
}


export default AddTodoForm;



