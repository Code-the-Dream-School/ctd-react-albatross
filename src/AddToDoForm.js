import React from 'react';

export const AddToDoForm = () => {
    const handleAddToDo = (e) => {
        // console.log(e);
        e.preventDefault();
        // used console.log(e) to find that the input is at 0 index of the array of the target elements and can access the value using the following combination of dot and bracket notation - however, this isn't super clear to me just from reading it
        // let toDoTitle = e.target[0].value;

        // can instead use this query Selector method to access the value of the input element directly and store it as toDoTitle - on quick read through, this may be clearer and easier to understand
        let toDoTitle = document.querySelector("input[name='title']").value;
        console.log(toDoTitle);
        // assigning toDoTitle an empty string does not clear the input field; but assigning the variable stored in toDoTitle as an empty string DOES clear the input field - not sure why as toDoTitle and document.querySelector("input[name='title']").value are the same thing.... 
        // toDoTitle = '';
        document.querySelector("input[name='title']").value = '';
    }
    return (
        <form onSubmit={handleAddToDo}>
            <label htmlFor="toDoTitle">Title</label>
            <input id="toDoTitle" name="title" />
            <button type="submit">Add</button>
        </form>
    )
}