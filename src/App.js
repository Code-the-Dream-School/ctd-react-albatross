import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
// import TodoListItem from './TodoListItem';


function App() {


const [todoList, setTodoList] = useState([]);
 
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  new Promise((resolve, reject) =>
  setTimeout(
    () =>resolve({data: {todoList: JSON.parse(localStorage.getItem('savedTodoList') || '[]'
  ) } } ), 
  2000
    )
  )

  .then(result => {
    setTodoList(result.data.todoList);
    setIsLoading(false);
  })
}, []);

useEffect(() => {
  if (!isLoading) { 
  localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }
},[todoList, isLoading])

const addTodo = (newTodo) => {
  setTodoList([...todoList, newTodo])
}

const removeTodo = (id) => {
  const newTodoList = todoList.filter((todo) => todo.title !== id);

  setTodoList(newTodoList);
}

  return (
    <div className="App">

      {isLoading ? (<p>Loading ...</p>):
      (<TodoList todoList={todoList}
        onRemoveTodo={removeTodo}/>)
      }
        <AddTodoForm
        onAddTodo={addTodo}/>
    </div>
  );
}

export default App;
