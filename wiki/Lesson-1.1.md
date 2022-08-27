This lesson will teach you the following:

- Hello React
- Project Setup
- React components
- JSX in React
- Lists in React

## Instructions

### Project Setup

In your terminal, use the `create-react-app` script to generate a new React project:

> Note: the `.` specifies that the app should be created in the same directory and the `--template` specifies what project template to use

    npx create-react-app . --template minimal

Install the `yarn` package manager globally:

    npm install --global yarn

Install project dependencies (this may take a few minutes):

    yarn

Run the application:

    yarn start

### React Components and JSX

- [ ] Open the `src/App.js` file
- [ ] Remove the existing JSX from the component
- [ ] Create a level-one heading that says "Todo List"
- [ ] Create an unordered list (`<ul>`)

### Lists in React

- [ ] Above the `App()` function, create an empty Array and store it in a variable named `todoList`
- [ ] Inside the Array, create at least 3 Objects with the following properties:
    - `id`: unique identifier (ex. `1`, `2`, `3`)
    - `title`: summary of the todo item (ex. `"Complete assignment"`)
- [ ] Inside your unordered list, insert a JavaScript expression
    - hint: `{}`
- [ ] Inside the JavaScript expression, map over your `todoList` array
- [ ] For each Object in the Array, return a list item (`<li>`) with the following:
    - `key` attribute with value of `id` property
    - inner text content with value of `title` property