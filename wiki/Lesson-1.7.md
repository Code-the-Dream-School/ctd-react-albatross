This lesson will teach you the following:

- Asynchronous Data
- Conditional Rendering
- Advanced State
- Impossible State

## Instructions

### Remove Custom Hook

- [ ] Open `src/App.js`
- [ ] Delete the `useSemiPersistentState` function call from `App`
- [ ] Copy the `useState` and `useEffect` hooks from `useSemiPersistentState` function back into `App`
- [ ] Delete the `useSemiPersistentState` function
- [ ] Run your application and view in browser
    - [ ] Verify that your Todo List still appears correctly

### Async

Currently our list data is retrieved synchronously from the browser's storage, but in the next lesson we will be fetching it asynchronously from an API. Let's update our code to mimic asynchronous data fetching:

- [ ] Below the `todoList` state, define a `useEffect` React hook with an empty dependency list
- [ ] Inside the side-effect handler function, define a new Promise and pass in a callback function with parameters `resolve` and `reject`
    - [ ] hint: `Promise()` constructor
- [ ] To mimic a loading delay, inside the callback function declare a timeout (hint: `setTimeout` method) with the following arguments:
    - [ ] callback: function with no parameters
    - [ ] delay time: 2000 milliseconds (2 seconds)
- [ ] Inside the timeout callback function, call the parameter `resolve` which is a callback function for when the Promise is successful and pass it an Object with property `data` as a nested empty Object
- [ ] Inside the `data` object, add a property `todoList` and set it's value to the initial/default list state (copy from `useState` hook)
- [ ] Update the default state for `todoList` to be an empty Array
- [ ] View your application in the browser
    - [ ] Notice that the Todo List is now empty and doesn't persist after refresh

So what's missing? We are retrieving our list from `localStorage` but we aren't updating our `todoList` state with the data so it remains empty. Let's fix that:

- [ ] Chain a `then` method to your `Promise` constructor and pass it a function with parameter `result`
- [ ] Inside the function, use your state setter to update the list and pass the `todoList` from your `result` object
- [ ] View your application in the browser

You'll notice now that the list is being saved in `localStorage` but after refreshing the page it is reset to empty. This is because our other side-effect is overwriting the data before the asynchronous fetch is complete.

We need a way to know that the data is still loading before trying to update it in `localStorage`.

### Add Loading State

- [ ] After the `todoList` state declaration, create a new state variable named `isLoading` with update function named `setIsLoading` with default value `true`
- [ ] Inside the second `useEffect` hook (with `todoList` dependency), add an `if` statement to check that `isLoading` is false before setting `localStorage`

Now we just need to way to turn loading off once the data has been fetched.

- [ ] Revisit the `then` callback in the first `useEffect` hook
- [ ] After setting the `todoList` state, add another line to set `isLoading` state to `false`
- [ ] View your application in the browser
    - [ ] Enter a new todo in "Add Todo" form and submit
    - [ ] Reload the page and wait 2 seconds
    - [ ] Notice that the saved item now appears in the list

Great! Now our data is being saved properly again, but that delay in loading makes it seem like the list is empty at first. Let's add a loading indicator to prevent confusion.

### Create Conditional Loading Indicator

- [ ] Inside the `App` JSX, create a new paragraph element above `TodoList` with text "Loading..."
- [ ] View your application in the browser
    - [ ] Reload the page and notice that the loading message is visible
    - [ ] Wait 2 seconds and notice that the Todo List appears but the loading message is still there

We don't want to always show the loading indicator, it should conditionally appear based on our `isLoading` state.

- [ ] Using a ternary operator inside JSX, if `isLoading` is `true` render the loading message, otherwise render the `TodoList` component
- [ ] View your application in the browser
    - [ ] Reload the page and notice that the loading message is visible
    - [ ] Wait 2 seconds and notice that the loading indicator disappears when the Todo List becomes visible

### Stretch Goals

Work in progress...