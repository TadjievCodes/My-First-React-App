// A JavaScript Library for building User Interfaces


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