This lesson will teach you the following:

- Lifting State
- Controlled Components
- Props handling

## Instructions

### Move Todo List into State

- [ ] Open `/src/App.js`
- [ ] Create new state variable named `todoList` with setter `setTodoList` and default value of an empty Array
- [ ] Pass `todoList` state as a prop named `todoList` to the `TodoList` component
- [ ] Open `/src/TodoList.js`
- [ ] Add `props` as a parameter to the `TodoList` functional component
- [ ] Change `todoList` to reference props instead of the hard-coded variable
- [ ] Delete the hard-coded `todoList` variable
- [ ] Run your application and view in browser
  - [ ] Verify that your Todo List is now empty (no list items)

### Control "Add Todo" Input

- [ ] Open `/src/AddTodoForm.js`
- [ ] Create new state variable named `todoTitle` with setter `setTodoTitle`
- [ ] Modify the `<input>` element to be a controlled input
  - [ ] Add `value` prop equal to `todoTitle` from component props
  - [ ] Add `onChange` prop equal to `handleTitleChange` function reference (we will declare this function in the next step)
- [ ] Above the `handleAddTodo` function, declare a new function named `handleTitleChange` that takes `event` as a parameter
  - [ ] First, retrieve the input value from the `event` object and store in variable named `newTodoTitle`
  - [ ] Then, call the state setter `setTodoTitle` and pass `newTodoTitle`
- [ ] In the `handleAddTodo` function, remove the `todoTitle` variable and update `onAddTodo` callback handler to pass our `todoTitle` state variable instead
- [ ] Run your application and view in browser
  - [ ] Enter a new todo in "Add Todo" form, submit, and verify that the title appears below

### Add New Todo to List

- [ ] Open `/src/App.js`
- [ ] Remove the `newTodo` state variable and the corresponding JSX that displays it
- [ ] Declare a new function named `addTodo` that takes `newTodo` as a parameter
  - [ ] Call the `setTodoList` state setter and use the spread operator to pass the existing Objects in the `todoList` Array along with the `newTodo` Object
- [ ] Change the value of the `onAddTodo` prop for `AddTodoForm` to `addTodo`
- [ ] Open `/src/AddTodoForm.js`
- [ ] Inside `handleAddTodo`, update the `onAddTodo` callback prop to pass an Object instead of a String; Object should have the following properties:
  - [ ] `title`: equal to `todoTitle`
  - [ ] `id`: unique identifier (hint: use `Date.now()` to generate a unique number)
    - _Disclaimer: we are suggesting `Date.now()` for now as a placeholder for unique number generation, but in the future you should not use this_
- [ ] Inside `handleAddTodo`, remove the `reset()` method and replace it with logic to reset the `todoTitle` state to an empty String
- [ ] Run your application and view in browser
  - [ ] Enter a todo in "Add Todo" form, submit, and verify item is visible in todo list
  - [ ] Enter another todo, submit, and verify that two items are visible in todo list

### Destructure Props

- [ ] Open `/src/TodoList.js` and update `props` to use destructuring
- [ ] Open `/src/TodoListItem.js` and update `props` to use destructuring
- [ ] Open `/src/AddTodoForm.js` and update `props` to use destructuring
