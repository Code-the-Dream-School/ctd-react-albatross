This lesson will teach you:

* Converting stateful class components to function components using hooks

The goal for this lesson is to get experience working with React Class components and how to get the same functionality from a class component and a functional component using hooks.

The React application that you will be using is a simple number guessing game. The game is currently written using a mix of class components for components that have state and stateless functional components.

When you are done the application should have all of the same functionality, but the class components should be refactored to be function components that use the `useState` hook to manage their stateful data.

# Instructions
## Fork the repository
The first step is to fork the source repository in GitHub and then clone your forked repository to your local development system. There are instructions for forking a repository in GitHub here: https://docs.github.com/en/get-started/quickstart/fork-a-repo

The repository to fork is: https://github.com/Code-the-Dream-School/ctd-react-numberGuessingAssignment

Once you have forked it and cloned locally make sure that the application runs by running the following commands if you are using `yarn`:

> If you are using `npm` just replace `yarn` with `npm` and run the same commands.

     yarn install
     yarn start

## Familiarize yourself with the code
In the current version of the application there is a mix of class components and stateless function components. Take some time to look over the structure of the application so that you understand how it is constructed.

The class components in the current version are `NumberGuessingGame` and `GuessControl`. These are the components that you will be converting to be function components with hooks. The existing function components don't need any changes.

If you want to attempt this on your own without a step by step walkthrough first then leave the section below collapsed.

## Step by Step
<details>
<summary>Click the arrow to expand this section and see step by step instructions to convert to function components with hooks.</summary>
<h2> Convert <code>GuessControl</code> </h2>
<ul>
<li> [ ] Open the <code>GuessControl.js</code> file. </li>
<li> [ ] Rename the current <code>GuessControl</code> class to <code>GuessControlOld</code> if you want to keep it a reference while converting the code.</li>
<li> [ ] Create a new function component called <code>GuessControl</code> that will take an <code>onGuess</code> prop.</li>
<li> [ ] Copy the return value from the render function in the class component to be the return value in the new function component. Remove any references to <code>this</code>. since those will be replaced with new references to local variables or props passed in to the function component.</li>
<li> [ ] Create a new state variable named <code>currentGuess</code> with setter <code>setCurrentGuess</code> and default value of an empty string. Set the <code>value</code> property for the input element to refer to this state value. (Make sure to import <code>useState</code>)</li>
<li> [ ] Create a <code>handleInputChange</code> function within the component that updates the <code>currentGuess</code> state value when the user changes the value in the input. Set the <code>onChange</code> property for the input element to refer to this function.</li>
<li> [ ] Create a <code>onSubmitGuess</code> function that calls the <code>onGuess</code> prop with the <code>currentGuess</code> value converted to a number and also resets the <code>currentGuess</code> to an empty string when it is called. Set the <code>onClick</code> property on the button to refer to this function.</li>
<li> [ ] If you still have the old class version around as <code>GuessControlOld</code>, delete it.</li></ul>
<h2> Convert <code>NumberGuessingGame</code></h2>
<ul>
<li> [ ] Open the <code>NumberGuessingGame.js</code> file.</li>
<li> [ ] Rename the current <code>NumberGuessingGame</code> class to <code>NumberGuessingGameOld</code> if you want to keep it a reference while converting the code.</li>
<li> [ ] Create a new function component called <code>NumberGuessingGame</code>.</li>
<li> [ ] Copy the logic and return value from the render function in the class component to be in the new function component. Remove any references to <code>this</code>. since those will be replaced with new references.</li>
<li> [ ] Create 3 state variables and their setters for <code>numberToGuess</code>, <code>numberOfGuesses</code>, and <code>latestGuess</code> and initialize them to the same values from the class component version. (Make sure to import <code>useState</code>) </li>
<li> [ ] Create a <code>handleGuess</code> function that will be passed in to the <code>GuessControl</code> component as the <code>onGuess</code> prop. This function should take the guess as an argument and set the <code>latestGuess</code> state with the guess (converted to a number using the Number function) and increment the <code>numberOfGuesses</code> state.</li>
<li> [ ] Create a <code>handleReset</code> function within the component that resets all 3 of the state properties the same way the handleReset function from the class component reset them. Pass this function to the <code>GameOver</code> component as the <code>onReset</code> prop.</li>
<li> [ ] Update all references from the class component that referred to <code>this.<something></code> to refer to the correct variable or function for the new function component.</li>
<li> [ ] If you still have the old class version around as <code>NumberGuessingGameOld</code>, delete it.</li></ul>
</details>