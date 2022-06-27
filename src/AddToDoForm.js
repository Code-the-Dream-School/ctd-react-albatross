import React from 'react';

export const AddToDoForm = (props) => {
    // this is considered local state - state can only be passed down (because AddToDoForm has no children this state is not passed anywhere and is therefore local state)
    let [newToDo, setNewToDo] = React.useState('');
    const handleSubmit = (e) => {
        // console.log(e);
        e.preventDefault();
        // used console.log(e) to find that the input is at 0 index of the array of the target elements and can access the value using the following combination of dot and bracket notation - however, this isn't super clear to me just from reading it
        // let toDoTitle = e.target[0].value;

        // can instead use this query Selector method to access the value of the input element directly and store it as toDoTitle - on quick read through, this may be clearer and easier to understand
        let toDoTitle = document.querySelector("input[name='title']").value;
        console.log(toDoTitle);
        // instructions indicate that onAddToDo should be passed the variable newToDo, however, after trying that it didn't result in anything happening but when passing in the variable within which the input field value is stored - the page updates accordingly
        // props.onAddToDo(newToDo); --- doesn't work
        props.onAddToDo(toDoTitle); // prints the value from the input field as expected
        // assigning toDoTitle an empty string does not clear the input field; but assigning the variable stored in toDoTitle as an empty string DOES clear the input field - not sure why as toDoTitle and document.querySelector("input[name='title']").value are the same thing.... 
        // toDoTitle = '';
        // document.querySelector("input[name='title']").value = '';
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="toDoTitle">Title:</label>
            {/* per mentor session with FS, he had value attr set to the state variable and onChange attr set to another function handleChange which called on the setState function to set the state variable to the value of the event.target; not sure if this is part of 1-3 or 1-4 assignment */}
            <input id="toDoTitle" name="title" />
            <button type="submit">Add</button>
        </form>
    )
}