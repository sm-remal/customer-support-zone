### 1. What is JSX, and why is it used?
#### Ans: 
JSX stands for JavaScript XML, and it is a special syntax used in React to simplify building user interfaces. JSX allows to write HTML-like code directly inside JavaScript, enabling to create UI components more efficiently. Although JSX looks like regular HTML, it’s actually a syntax extension for JavaScript.

#### Why JSX is Used:
* Declarative & Readable
* Combines UI with Logic
* Integration with JavaScript
* Tooling & Optimization
* Component-based UI building
* Better Developer Experience
---

### 2. What is the difference between State and Props?
#### Ans:
Props are used to pass data from parent to child components, while state is used to manage data that can change over time within a component. props is immutable but state is mutable, meaning the component can update it over time. Props allow components to be reusable and dynamic, while state gives components the ability to be interactive and handle changing data.

---

### 3. What is the useState hook, and how does it work?  
#### Ans:
The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

The useState() hook works by handling and managing state in applications. The useState() hook takes the first initial value of the state variable as its argument. The second value then sets your state, which is always initiated as setState to update the function. When update the state using this function, React re-renders the component to show the new value. It can use multiple times to handle different pieces of data.

---

### 4. How can you share state between components in React?
#### Ans:
In React, each component has its own state. But if two or more components need the same data, we cannot share state directly between them. To fix this, we use lifting state up. This means we move the state to the nearest parent component and pass it to child components as props. This way, both children can use and change the same state.

Another way to share state is with the Context API. This is useful when many components need the same data. Instead of sending props through many layers, Context allows the state to be available anywhere in the app.

---

### 5. How is event handling done in React? 
#### Ans:
React events just like HTML DOM events, React can perform actions based on user events., but there are some differences. Events in React are written in camelCase instead of lowercase. For example, instead of onclick, React uses onClick. Also, instead of passing a string of code, React requires a function to be passed as the event handlers are written inside curly braces: onClick={ eventHandle }  instead of onclick="eventHandle()"






