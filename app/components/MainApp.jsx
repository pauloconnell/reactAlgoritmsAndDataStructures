const React = require('react');
const UnorderedList = require('./UnorderedList');
const Set= require('./DataStructures/Set');

const dependenciesArray = [
  'express - middleware for the node server',
  'react - for generating the views of the app',
  'react-dom - powers the rendering of elements to the DOM, typically paired with React',
  'webpack - for bundling all the javascript',
  'webpack-cli - command line support for webpack',
  'jsx-loader - allows webpack to load jsx files'
];

const componentsMade = [
  'HelloWorld - which is the view you are seeing now!',
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
];

/* the main page for the index route of this app */
const MainApp = function() {
  return (
    <div>
      <h1>React App</h1><h2> Components added for key algorithms and data Structures</h2>
      <Set />
    </div>
  );
}

module.exports = MainApp;