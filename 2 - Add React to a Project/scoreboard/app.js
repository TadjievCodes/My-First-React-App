const title = React.createElement(
    'h1', { id: 'main-title', title: 'This is a title.' },
    'My First React Element!'

);
// h1 just respresents a dom note
// This just decsribes dom notes but not real DOM elements


const desc = React.createElement(
    'p', // The targeting argument
    null, // The props Argument
    'I just learned how to create a React node and render it'
);


// For rendering we have to do
ReactDOM.render(
    // first argument
    title,
    // second argument and root is just a name 
    document.getElementById('root')

);