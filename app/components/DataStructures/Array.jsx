const React = require("react");

const Array = function(props) {
  let code = "{ a - b}"; // curly brackets cause problems in JSX, so just use variable
  let leftBracket = "{";
  let rightBracket = "}";
  return (
    <div className="text">
      <h2> Data Structure:</h2>
      <h1>Array</h1>

      <h2>Sorting</h2>
      <b>
        array.sort() and array.reverse() are provided for numerical sort.
        <br />
        For string operation,(based on first letter of word) to sort items of []
        myArray, include a function as follows: myArray.sort(function(a, b)b -
        a); OR a-b for reverse order
      </b>

      <br />
      <button
        title="Click button to show details"
        onClick={e => props.handleArray(e)}
      >
        Array Sorting Details:
      </button>

      {props.showArray ? (
        <div className="blue">
          <h3>Alphabetical sort:</h3>
          <h4>
            Strings are compared based on ASCII key value, so best to convert
            both to UpperCase
            <br />
          </h4>
          <h3>Numerical Sort:</h3>

          <h4>
            Can use compare function:
            <br />
            myArray.sort(function(a, b)return b - a);
          </h4>
          <code>
            let sortedNumberArray=array.sort(function(a, b){code})<br />
            comparison Function behavior: <br />
            <br />
            function compare(a, b) <br />
            if (a is less than b by some ordering criterion) <br />
            return -1;
            <br />
            else if (a is greater than b by the ordering criterion) <br />
            return 1; <br />
            else return 0; // a must be equal to b <br />
            <br />
            <strong>
              If the result is negative a is sorted before b.
              <br />
              If the result is positive b is sorted before a.
              <br />
              If the result is 0 no changes are done with the sort order of the
              two values.
              <br />
            </strong>
            <br />
          </code>

          <br />
          <h3>Finding Array Max and Min values:</h3>
          <code>var min=Math.min(arr);</code>
          <br />
          <code>var max=Math.max(arr);</code>
          <br />
        </div>
      ) : (
        <div>Click button to show details</div>
      )}
    </div>
  );
};
module.exports = Array;
