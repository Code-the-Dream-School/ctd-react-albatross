import { useState } from 'react';

export const AddToDoForm = ({onAddToDo}) => {
    const [ toDoTitle, setToDoTitle ] = useState("");

    const handleTitleChange = (e) => {
        let newToDoTitle = e.target.value;
        setToDoTitle(newToDoTitle);
    }

    const handleAddToDo = (e) => {
        e.preventDefault();
        onAddToDo({
            title: toDoTitle,
            id: Date.now(),
        }); 
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