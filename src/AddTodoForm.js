import React from "react";


const AddTodoFrom = () => {

    return(
        <form>
            <label htmlFor="todoTitle">
                Title
            </label>
            <input id="todoTitle"></input>
            <button>Add</button>
        </form>
    )
}



export default AddTodoFrom;