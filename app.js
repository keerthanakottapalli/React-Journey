import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement creates a JavaScript object (React element) which ReactDOM later converts into actual HTML elements in the browser DOM.
//React.createElement(tag, props, children)
// const heading = React.createElement('h1', {id: "heading"}, "Hello World");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, React.createElement('h1', { className: "child-heading" }, "this is React App")));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);
