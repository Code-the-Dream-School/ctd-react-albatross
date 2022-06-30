import React from 'react'

// add props as a parameter 
function AddTodoForm(props) {
    const handleAddTodo = (event) => {
        event.preventDefault();

        const todoTitle = event.target.title.value;
        // invoke the onAddTodo callback prop and pass newTodo-this is the todoTitle as an argument 
        props.onAddTodo(todoTitle);

        console.log(todoTitle)

        event.target.reset();
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input id='todoTitle' name='title' />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodoForm