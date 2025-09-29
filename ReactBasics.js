import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement creates a JavaScript object (React element) which ReactDOM later converts into actual HTML elements in the browser DOM.
//React.createElement(tag, props, children)
// const heading = React.createElement('h1', {id: "heading"}, "Hello World");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const element = <h1>Hello, this is just a React Element that is what we call as JSX.</h1>  //React Element

const Title = () => <h1>Hello, this is React Functional Title Component</h1>; // single lined functional component

//Component Composition: which calls a component into another component
const Heading = () => {
    return (
        <div>
            <Title />   
            <h1 className='heading'>This is Heading Component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element)
root.render(<Heading />);

