const React = require("react");
//const styles = require("./index.css");

class BreadthFirstSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showThis: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showThis: !this.state.showThis
    });
    console.log("handled ", this.state.showThis);
  }

  render() {
    return (
      <div className="text">
        <h2> Algorithm</h2>
        <h1>Breadth First Search</h1>
        <h2>BFS</h2>
        Breadth First means to load up all options at each level of the tree
        <div className="big">This is the same as an IN ORDER Traversal</div>
        <br />
        <button
          title="Click button to show details"
          onClick={e => {
            this.handleClick();
            console.log("clicked", e.target);
          }}
        >
          Breadth First Search Details:
        </button>
        {this.state.showThis}
        {this.state.showThis ? (
          <div id="dfs" className="blue">
            <center>
              <h3>Breadth First Search:</h3>
              The iterative solution is Associated with using a Queue, and
              finding shortest Path problems, slower than DFS.
              <h4>Used for Binary Tree traversals</h4>
            </center>

            <h5>Method:</h5>
            <p>
              {" "}
              Start at root, and follow algorithm:
              <br />
              1) add current node to output
              <br />
              2) add children(or UNVISITED adjacent nodes) to queue
              <br />
              3) mark current node as visited(possibly use output.indexof(x)!=-1
              =Not Visited)
              <br />
              4) pop next from queue - becomes current node and begin algorithm
              again
              <br />
              5) if queue is empty, then we are done (return output)
              <br />
              <div className="center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif" />
              </div>
              <code>
                Recursive solution:
                <br />
                var result=[]; <br />
                var post=function(node)&#123;
                <br />
                if(!node) return;
                <br />
                if(node.left)&#123; <br />
                post(node.left); &#121;
                <br />
                if(node.right)&#123; <br />
                post(node.right); &#121;
                <br />
                result.push(node.val); <br />
                &#121;
                <br />
                post(root);
                <br />
                &#121;
                <br />
                return result;
                <br />
                Iterative solution:
              </code>
            </p>

            <figure>
              <figcaption></figcaption>
              <pre>
                <code>
                  <br />
                  <h4></h4>
                </code>
              </pre>
            </figure>
          </div>
        ) : (
          <div>`Click button to show details`</div>
        )}
      </div>
    );
  }
}
module.exports = BreadthFirstSearch;
// delete this not used in breadth first
//            <h5>
//   Pre-order
//   <br />
// </h5>
// 1.Visit node <br />
// 2.traverse left
// <br />
// 3.traverse right <br />
// Use recursion to solve these problems. ie traverse = recursive call
// <br />
// <code>
//   let preOrder=function(node) <br />
//   if node==null then return
//   <br />
//   visit(node)-ie answer.push(node.val) <br />
//   preOrder(node.left) //recursion
//   <br />
//   preOrder(node.right) // magic :)
//   <br />
// </code>
// <br />
// time complexity O(n)
// <h5>
//   In-order -
//   <br />
// </h5>
// 1.traverse left
// <br />
// 2.Visit node <br />
// 3.traverse right <br />
// Use recursion to solve these problems:
// <br />
// <code>
//   let preOrder=function(node) <br />
//   if node==null then return
//   <br />. preOrder(node.left) //recursion
//   <br />
//   visit(node)-ie answer.push(node.val) <br />
//   preOrder(node.right) // magic :)
//   <br />
// </code>
// <br />
// <h5>
//   Post-order
//   <br />
// </h5>
// <div>
//   1.traverse left <br />
//   2.traverse right <br />
//   3.Visit node <br />
//   Use recursion to solve these problems:
//   <br />
//   <code>
//     let postOrder=function(node)
//     <br />
//     if (node==null) return;
//     <br />
//     postOrder(node.left) //recursion
//     <br />
//     postOrder(node.right) // magic :)
//     <br />
//     answer.push(node.val) <br />
//   </code>
//   <br />
//   time complexity O(n)
//   <br />
