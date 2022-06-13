import React from 'react';

export const AddToDoForm = () => {
    return (
        <form>
            <label htmlFor="toDoTitle">Title</label>
            <input id="toDoTitle"/>
            <button type="submit">Add</button>
        </form>
    )
}