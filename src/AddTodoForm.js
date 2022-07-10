import React from 'react';

const AddTodoForm = (props) => {

    const handleAddTodo = (e) => {
        e.preventDefault();
        const todoTitle = e.target.title.value;
        console.log(todoTitle);
        e.target.reset()
        props.onAddTodo(todoTitle)
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlfor="todoTitle">Title </label>
            <input type= "text" name = "title" id="todoTitle"/>
                <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;

