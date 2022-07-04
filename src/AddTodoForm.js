import React from "react";



function AddTodoForm(){

    return (
        //console.log("I'm iside add to do list function!")
        <form>
            <label type="text" htmlFor="todoTitle" >Name:</label>
            <input id="todoTitle" /><br/>
            <button type="submit" text="Add" />
        </form>
    )

}



export default AddTodoForm;