const React = require('react');


const Set = function(props) {
  
  
  return (
  <div>
    <h2> Data Structure:</h2><h1>Set</h1>
    Set is like an array but with NO duplicate elements.<br/>
    
      Constructor:
      let mySet = new Set();
      
      It has the following methods:
      mySet.add(value)
        appends value to the Set and returns the new Set
      mySet.clear()
        removes ALL elements from the set
      mySet.delete(value)
        removes value and returns true or false for success/fail
      mySet.has(value)
        returns true if value in Set/false if not
      Iteration Methods:
      mySet.keys()
      mySet.values()
      mySet.entries()
      mySet.forEach(callback[,thisArg])
  
    </div>
  );
};
module.exports = Set;
