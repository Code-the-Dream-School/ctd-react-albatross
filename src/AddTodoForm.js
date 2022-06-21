import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        event.target.reset();
        props.onAddTodo(todoTitle);
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" name="title" />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
