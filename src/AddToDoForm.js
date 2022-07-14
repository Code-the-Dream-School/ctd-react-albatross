import { useState } from 'react';

export const AddToDoForm = ({onAddToDo}) => {
    // establish toDoTitle as a stateful variable and set the initial state
    const [ toDoTitle, setToDoTitle ] = useState("");

    const handleTitleChange = (e) => {
        // update the state of toDoTitle to equal the value of newToDoTitle
        let newToDoTitle = e.target.value;
        setToDoTitle(newToDoTitle);
    }

    const handleAddToDo = (e) => {
        // prevent the form submission from refreshing the entire page (which would be the default behavior)
        e.preventDefault();

        //CALL BACK the "addToDo" that was declared in App to update state with a new to do list item - this is where the data collected here (toDoTitle) is able to pass back up to App via the callback handler
        onAddToDo({
            title: toDoTitle,
            id: Date.now(),
        }); 

        // reset the value of the input field to a blank string after submit
        setToDoTitle("");
    }
    return (
        <form onSubmit={handleAddToDo}>
            <label htmlFor="toDoTitle">Title:</label>
            <input 
                id="toDoTitle" 
                name="title" 
                value={toDoTitle}
                onChange={handleTitleChange}
            />
            <button type="button">Add</button>
        </form>
    )
}