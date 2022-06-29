import React from 'react';

export const AddToDoForm = (props) => {
    const handleAddToDo = (e) => {
        e.preventDefault();
        let toDoTitle = e.target.title.value;
        console.log(toDoTitle);
        // instructions indicate that onAddToDo should be passed the variable newToDo, however, after trying that it didn't result in anything happening but when passing in the variable within which the input field value is stored - the page updates accordingly
        // props.onAddToDo(newToDo); 
        //DOESN'T WORK - "newToDo is not defined"

        e.target.title.value = '';

        props.onAddToDo(toDoTitle); 
    }
    return (
        <form onSubmit={handleAddToDo}>
            <label htmlFor="toDoTitle">Title:</label>
            <input id="toDoTitle" name="title" />
            <button type="submit">Add</button>
        </form>
    )
}