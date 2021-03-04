const React = require("react");

const Array = function(props) {
  let code="{ a - b}";  // curly brackets cause problems in JSX, so just use variable 
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
          <h3>String sort(default):</h3>
          <code>let sortedAlphabetically=array.sort();</code>
          <br />
          <h3>Numerical sort:</h3>
          <h4>
            <code>let sortedNumberArray=array.sort(function(a, b){code})</code>
          </h4>
          <br />
           <h3>Finding Array Max and Min values:</h3>
          <code>var min=Math.min(arr);</code>
          <br />
          <code>var max=Math.max(arr);</code>
          <br />
          
        </div>
      ) : (
        `Click button to show details`
      )}
    </div>
  );
};
module.exports = Array;
