import React from 'react';

export const AddToDoForm = () => {
    const handleAddToDo = (e) => {
        e.preventDefault();
        let toDoTitle = document.querySelector("input[name='title']").value;
        console.log(toDoTitle);
    }
    return (
        <form onSubmit={handleAddToDo}>
            <label htmlFor="toDoTitle">Title</label>
            <input id="toDoTitle" name="title"/>
            <button type="submit">Add</button>
        </form>
    )
}