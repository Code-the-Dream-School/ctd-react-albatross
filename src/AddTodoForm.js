import React from 'react'

const AddTodoForm = ({onAddTodo}) => {
  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  // Handle "Add Todo Form" Submit
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({title: todoTitle, id:Date.now()})
    setTodoTitle('')
  }
  
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor='todoTitle'>Title</label>
        <input id='todoTitle' placeholder='Add Title' name='title' value={todoTitle} onChange={handleTitleChange} > 
        </input>
        <button>Add</button>
      </form>
      
    </div>
  )
}

export default AddTodoForm
