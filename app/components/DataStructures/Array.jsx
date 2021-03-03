const React = require("react");

const Array = function(props) {
  return (
    <div>
      <h2> Data Structure:</h2>
      <h1>Array</h1>
      <h2>Sorting</h2>
      <b>
        Sort is a string opperation, to sort numbers, must include a function as
        follows:
      </b>
      <br />
      <button onClick={e => props.handleArray(e)}>Click Me</button>
      {props.showArray ? (
        <div>
          <h3>string sort:</h3>
          <code>array.sort();</code>
          <br />
          <h3>Numerical sort:</h3>
          <h4>
            <code>array.sort(function(a, b)&#123return a - b&#125)</code>
          </h4>
        </div>
      ) : (
        `Click button to show details`
      )}
    </div>
  );
};
module.exports = Array;
