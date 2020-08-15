// A JavaScript Library for building User Interfaces
// React creates Objects that desribe DOM nodes but not the real DOM elements
// ReactDOM.render is the kewyword for rendering the content


const title = React.createElement(
    'h1', { id: 'main-title', title: 'This is a title.' },
    'My First React Element!'

);
// h1 just respresents a dom note
// This just decsribes dom notes but not real DOM elements


const desc = React.createElement(
    'p', // The targeting argument
    null, // The props Argument similar to an Object
    'I just learned how to create a React node and render it' // The third argument
);


const header = React.createElement(
    'header',
    null,
    title,
    desc
);

// React never touches the Real DOM, it just manages what gets rendered and what will be updated
// For rendering we have to do
ReactDOM.render(
    // first argument
    header,
    //title,
    // second argument and root is just a name 
    document.getElementById('root')

);


/*
JSX is an extension to the JavaScript language that uses a markup-like syntax to create React elements. 
Most React developers write their UI using JSX because it resembles writing HTML.
*/

const title = 'My First React Element!';

const desc = 'I just learned how to create a React node and render it into the DOM';