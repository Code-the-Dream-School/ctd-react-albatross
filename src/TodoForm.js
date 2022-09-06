import React from "react";


function TodoForm() {
    const handleChange = (e) => {
        console.log(e);
    } 
    return(
        <form>
            <label type="htmlFor" id="todoTitle"> Title </label>
            <input type= "text" id="todoTitle" onChange={handleChange}></input>
            <button>Add</button>
        </form>
    )
}









export default TodoForm;