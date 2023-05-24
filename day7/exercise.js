// 30 Days Of React - Day 7: Class Components
// Exercises: Level 1

// 1. How do you write a pure JavaScript function?
// We can write a pure javascript function by using the keyword 'function' and followed with its function name and then use curly braces to write code inside a function.
// Another way of writing a function is by using an arrow function. Use let or const and a function name to declare a function, followed by a "=" sign and write a parameter for it, if there is no parameter () use empty parenthesis, then type "=>" which looks like a function and then using curly braces and by writing the code inside the curly braces.
// ex: The syntax of a Regular function
// function function_name {
    // your code here
//}
// ex: Syntax of an arrow function:
// const arrFunc = () => {
    // your code here
// }


// 2. What is inheritance and how do you make a child from a parent class?
// Inheritance is using the properties of the parent class in the child class.
// We can make a child class from a parent class by simply using the keyword 'extends' keyword. Here the child class extends the Parent class by using the extends keyword that inherits all the properties defined in the parent class. The child class can then add additional properties and methods or override the ones inherited from the parent class.
/*
Syntax:
class Parent {
//   Parent class properties and methods
}

class Child extends Parent {
//   Child class properties and methods
}
*/

// 3. What is class based React component ?
/*
A class-based React component is a type of component in React that is defined using JavaScript classes and extends the React.Component class provided by the React library. Class components were the primary way of creating components in React before the introduction of hooks in React 16.8.

To define a class-based component, you create a new class that extends the React.Component class and implement the required methods and properties. The most important method in a class component is the render() method, which returns the JSX that describes the component's output.

Here's an example of a class-based component:

import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <div>Hello, Class Component!</div>;
  }
}
*/

// 4. What is the difference between functional React component and class based React component?
/*

Functional React Component:

1. Written as regular JavaScript functions.
2. Use hooks for state management and lifecycle.
3. Shorter and simpler code.
4. Promote a functional programming style.
5. Better performance.

Class-based React Component:

1. Implemented as JavaScript classes.
2. Use this.state and lifecycle methods for state management and lifecycle.
3. Longer and more complex code.
4. Can be useful for complex logic.
5. Less favored and not actively improved.
*/

// 5. When do we need to use class based components instead of functional components?
// We use class based components when we want to use complex logic.
// Legacy codebases or projects with existing class-based components.
// When specific lifecycle methods or fine-grained control over refs are needed.
// For utilizing Higher-Order Components (HOCs) or the Render Props pattern.

// 6. What is the use cases of class based component?
/*
Class-based components are useful in the following scenarios:

1. When lifecycle methods like componentDidMount or componentWillUnmount are needed.
2. For complex state management with multiple state variables or intricate interactions.
3. When custom instance methods are required to encapsulate component-specific logic or handle events.
4. To work with refs for fine-grained control over DOM elements or integration with third-party libraries.
5. When integrating with legacy codebases or projects that heavily rely on class-based components.
*/

// 7. Which type of component do you use most frequently ? functional or class-based component
// I always prefer using functional component because of simpler and shorter syntax.

// 8. What is React life cycle?
// The React lifecycle refers to the different phases a React component goes through during its existence.
/*
1. Mounting: Component is created and inserted into the DOM.

constructor(): Initializes the component's state and binds event handlers.
render(): Renders the JSX and returns the output.
componentDidMount(): Runs after the component is mounted to the DOM. Used for data fetching or setting up subscriptions.

2. Updating: Component is re-rendered due to changes in props or state.

getDerivedStateFromProps(): Updates the state based on new props.
shouldComponentUpdate(): Determines if the component should re-render or not.
render(): Renders the JSX and returns the updated output.
componentDidUpdate(): Runs after the component is updated in the DOM. Used for side effects or fetching additional data.

3. Unmounting: Component is removed from the DOM.

componentWillUnmount(): Runs just before the component is unmounted. Used for cleanup tasks.
*/

// 9. What is state in React?
// State in React is a feature that allows components to manage and store data. It represents the internal state of a component and influences its rendering and behavior. State is used for holding user input, fetched data, and managing UI states. It can be defined in a component's constructor or using the useState hook. State is updated using the setState method or the state updater function returned by useState. State is local to a component and not accessible from other components unless explicitly passed down as props.