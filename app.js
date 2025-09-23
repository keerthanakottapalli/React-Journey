// const heading = React.createElement('h1', {id: "heading"}, "Hello World");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const parent = React.createElement('div', {id: "parent"}, React.createElement('div', {id: "child"}, React.createElement('h1', {className: "child-heading"}, "this is h1 tag")));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);