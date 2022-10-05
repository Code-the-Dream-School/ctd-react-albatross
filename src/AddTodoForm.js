import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTodoFrom = ({ onAddTodo }) => {

    const [todoTitle, setTodoTitle] = useState("")

    // const handleTitleChange = event => {
    //     let newTodoTitle = event.target.value;
    //     setTodoTitle(newTodoTitle);
    // }


    const handleAddTodo = async (event) => {

        event.preventDefault();
        // const todoTitle = event.target.title.value;
        // console.log(todoTitle);
        // event.target.reset();

        if (todoTitle !== "") {
            await addDoc(collection(db, "todos"), {
                todoTitle,
                completed: false,
            });
            setTodoTitle("");
        };

        let listTodo = {
            title: todoTitle,
            id: Date.now(),
            num: 33
        }

        console.log(listTodo.id)
        onAddTodo(listTodo);
        setTodoTitle('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                id='todoTitle'
                name='title'
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                children
                inputRef
            >
                Title:
            </InputWithLabel>
            {/* <label htmlFor="todoTitle">
                Title
            </label>
            <input name="title" id="todoTitle" value={todoTitle} onChange={handleTitleChange}></input> */}
            <button>Add</button>
        </form>
    )
}



export default AddTodoFrom;



// import React, { useState } from "react";
// import InputWithLabel from "./InputWithLabel";

// function AddTodoForm({ onAddTodo }) {
//   const [todoTitle, setTodoTitle] = useState("");

//   const handleTitleChange = (event) => {
//     const newTodoTitle = event.target.value;
//     setTodoTitle(newTodoTitle);
//   };

//   const handleAddTodo = (event) => {
//     event.preventDefault();

//     let todoDetails = {
//       id: Date.now(),
//       title: todoTitle,
//     };

//     onAddTodo(todoDetails);

//     setTodoTitle("");
//   };

//   return (
//     <form onSubmit={handleAddTodo}>
//       <InputWithLabel
//         todoTitle={todoTitle}
//         onChange={handleTitleChange}
//         children
//         inputRef
//       >
//         <span>Todo:</span>
//       </InputWithLabel>
//       <button type="submit">
//         Add
//       </button>
//     </form>
//   );
// }

// export default AddTodoForm;