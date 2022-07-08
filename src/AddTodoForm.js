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

// Submitting as complete and adding a comment here to make lesson-1-2-b different from lesson-1-2. Will remove when I hear back from mentor and can correct the 10k pending changes issue from lesson-1-2. Will proceed to work on lesson-1-3  