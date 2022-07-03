import React from 'react';

function AddTodoForm() {
    return (
        <form>
            <label htmlfor="todoTitle">Title </label>
            <input id="todoTitle"></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;