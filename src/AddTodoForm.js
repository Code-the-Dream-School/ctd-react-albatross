import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoFrom = ({ onAddTodo }) => {

    const [todoTitle, setTodoTitle] = useState("")

    const handleTitleChange = event => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }


    const handleAddTodo = event => {

        event.preventDefault();
        // const todoTitle = event.target.title.value;
        // console.log(todoTitle);
        // event.target.reset();

        let listTodo = {
            title: todoTitle,
            id: Date.now(),
            num: 33
        }

        console.log(listTodo.id)
        onAddTodo(listTodo);
        setTodoTitle('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                id='todoTitle'
                name='title'
                value={todoTitle}
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



export default AddTodoFrom;
