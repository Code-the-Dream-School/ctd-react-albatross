This lesson will teach you the following:

* Project Structure
* Typechecking with Prop Types
* Unit Testing

## Instructions
### Improve Project Structure
- [ ] Inside the `src/` directory, create a new folder named `components/`
- [ ]  Move the following files into the `components/` directory
     - [ ]  `AddTodoForm.js`
     - [ ]  `InputWithLabel.js`
     - [ ]  `TodoContainer.js` (stretch goal - you may not have this in your files)
     - [ ]  `TodoList.js`
     - [ ]  `TodoListItem.js`
     - [ ]  Any CSS modules associated with the components above
- [ ]  Open `src/App.js`
- [ ]  Update the import path for `TodoContainer.js` (stretch goal)

### Install Prop Types Library
> If you're using NPM, run `npm install --save prop-types` instead

     yarn add prop-types

### Assign Component Prop Types
Documentation: https://reactjs.org/docs/typechecking-with-proptypes.html

- [ ]  Open `AddTodoForm.js`
- [ ]  Import `PropTypes` from the "prop-types" package
- [ ]  Below the `AddTodoForm` function, define the `propTypes` property of that function as a new object
     - [ ]  Inside the object, define a property with key `onAddTodo` (prop name) and value `PropTypes.func` (function data type)
- [ ]  Run your application and view in browser
     - [ ]  Verify that your Todo List still appears correctly with no console errors
Repeat the steps above for each of the following components, be sure to use the appropriate key/value pairs depending on the `props` for each:

- [ ]  `InputWithLabel.js`
- [ ]  `TodoContainer.js` (stretch goal)
- [ ]  `TodoList.js`
- [ ]  `TodoListItem.js`

### (Optional) Unit Testing with Jest
View Instructions: https://github.com/Code-the-Dream-School/ctd-jest-unit-testing-practice