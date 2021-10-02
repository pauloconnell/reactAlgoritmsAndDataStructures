const React = require("react");

const LinkedList = function(props) {
  return (
    <div className="text">
      <h2> Data Structure:</h2>
      <h1>Linked List</h1>
      <div className="text">
        <b>
          Linked list is like an array but with no quick .index or [index]
          access
        </b>
        <br />
        Instead there is a Head node, middle nodes and Tail node. Each node has
        Node.val, Node.next -which points to the next location of the linked
        list the Tail has .next===null
      </div>
      <br />
      <button
        title="Click button to show details"
        onClick={e => props.handleLinkedList(e)}
      >
        Linked List Details:
      </button>
      {props.showLinkedList ? (
        <div className="blue">
          <h3>Convergance of 2 linked lists:</h3>
          <code>var getIntersectionNode = function(headA, headB)</code>
          <br />
          -Check if either head is null, if so no intersection:
          <br />
          <code>if(headA===null|| headB===null) return null;</code>
          <br />
          -Set pointers to represent each linked list: <br />
          <code>
            var pointerA=headA;
            <br />
            var pointerB=headB;
          </code>
          <br />
          <b>
            //to even odd lengths of lists, once pointer reaches end, start at
            other list, will = 2nd run thru loop
          </b>
          <br />
          <code>
            while(pointerA!==pointerB)
            <br />- deep !equals to ensure exact same node <br />
            pointerA=pointerA.next;
            <br />
            pointerB=pointerB.next;
            <br />
            if(pointerA === pointerB)
            <br />
            return pointerA; <br />
            -on second loop, if no match, pointerA will ==pointerB=== null
            <br />
            if(pointerA ===null)
            <br />
            pointerA=headB;
            <br />
            if(pointerB ===null)
            <br />
            pointerB=headA;
            <br />
            return pointerA; <br />
          </code>
          <br></br>
        </div>
      ) : (
        <div>Click button to show details</div>
      )}
    </div>
  );
};
module.exports = LinkedList;
