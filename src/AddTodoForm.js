import React, { useState } from 'react';

//Open /src/AddTodoForm.js and update props to use destructuring
const AddTodoForm = ({ onAddTodo }) => {
    // Create new state variable named todoTitle with setter setTodoTitle
    const [todoTitle, setTodoTitle] = useState('');

    //Above the handleAddTodo function, declare a new function named handleTitleChange that takes event as a parameter
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value; //First, retrieve the input value from the event?
        // console.log(newTodoTitle);
        setTodoTitle(newTodoTitle);
    };
    // console.log(todoTitle);
    const handleAddTodo = (event) => {
        event.preventDefault();
        // const todoTitle = event.target.title.value;
        // In the handleAddTodo function, remove the todoTitle variable and update onAddTodo callback handler to pass our todoTitle state variable instead
        //  Inside handleAddTodo, update the onAddTodo callback prop to pass an Object instead of a String; Object should have the following properties:
        //  title: equal to todoTitle
        //  id: unique identifier (hint: use Date.now() to generate a unique number)
        // Disclaimer: we are suggesting Date.now() for now as a placeholder for unique number generation, but in the future you should not use this
        onAddTodo({ title: todoTitle, id: Date.now() });
        // Inside handleAddTodo, remove the reset() method and replace it with logic to reset the todoTitle state to an empty String
        // event.target.reset();
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input
                id="todoTitle"
                type="text"
                name="title"
                // Add value prop equal to todoTitle from component props
                value={todoTitle}
                //Modify the <input> element to be a controlled input
                onChange={handleTitleChange}
                //Add onChange prop equal to handleTitleChange function reference (we will declare this function in the next step)
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
