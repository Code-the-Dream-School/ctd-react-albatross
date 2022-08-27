This lesson will teach you the following:

* Cascading Style Sheets (CSS)
* CSS Modules

## Instructions
So far you've built a functional todo list, but now it's time to add some style!

There are multiple ways to work with CSS in React applications:

* Inline CSS
* CSS
* CSS-in-JS

In this lesson, we would like for you to use CSS modules. Let's walk through an example:

- [ ] Open `src/`
- [ ] Create a CSS module file called `TodoListItem.module.css`
- [ ] Add a ruleset for class `ListItem` that changes the text color
- [ ] Open `src/TodoListItem.js`
- [ ] Import the default module (as `style`) from `TodoListItem.module.css`
- [ ] Add a `className` to the `<li>` element and set the value as the class from CSS module (`{style.ListItem}`)
     - note: the `style` object represents all the class names in your CSS module file, so you access them like normal object properties (dot or bracket notation)

## Rubric

For this assignment, there are some general requirements but the design is up to you. This is your chance to be creative and personalize your todo list application.

- [ ] Change the background color of the page body
- [ ] Change the default text color
- [ ] Customize the font family
     - [ ] (Optional) Load in a font family from Google Fonts
- [ ] Customize style of navigation items
- [ ] Add spacing (padding/margin) between elements
- [ ] Change the font size, weight, and color of all headings
- [ ] Customize input and button styles
- [ ] Use Media Queries to make sure the application is responsive for all device sizes (mobile, tablet, desktop, etc.)
- [ ] (Optional) Add multi-media usage (i.e. iconography)

This is the basic rubric, but we encourage you to think beyond this list and come up with your own ideas to make your application unique!