const React = require("react");
//const styles = require("./index.css");

class DepthFirstSearch extends React.Component {
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
        <h1>Depth First Search</h1>
        <h2>DFS</h2>
        Depth First means to drill down as deep as possible, then backtrack
        <br />
        <div className="big">
          There are 3 possible ways to perform DFS traversal - PreOrder
          InOrder(which is actually BFS) and PostOrder
        </div>
        <button
          title="Click button to show details"
          onClick={e => {
            this.handleClick();
            console.log("clicked", e.target);
          }}
        >
          DepthFirstSearch Details:
        </button>
        {this.state.showThis}
        {this.state.showThis ? (
          <div id="dfs" className="blue">
            <center>
              <h3>Depth First Search:</h3>
              Associated with using a Stack...but we will use recursion instead
              <h4>Used for Binary Tree traversals</h4>
            </center>
            <h5>
              Pre-order
              <br />
            </h5>
            1.Visit node <br />
            2.traverse left
            <br />
            3.traverse right <br />
            Use recursion to solve these problems. ie traverse = recursive call
            <br />
            <code>
              let preOrder=function(node) <br />
              if node==null then return
              <br />
              visit(node)-ie answer.push(node.val) <br />
              preOrder(node.left) //recursive call to left solve left side
              <br />
              preOrder(node.right)
              <br />
            </code>
            <br />
            time complexity O(n)
            <h5>
              In-order -
              <br />
            </h5>
            1.traverse left
            <br />
            2.Visit node <br />
            3.traverse right <br />
            Use recursion to solve these problems:
            <br />
            <code>
              let preOrder=function(node) <br />
              if node==null then return
              <br /> preOrder(node.left) //recursion
              <br />
              visit(node)-ie answer.push(node.val) <br />
              preOrder(node.right) // magic :)
              <br />
            </code>
            <br />
            <h5>
              Post-order
              <br />
            </h5>
            <div>
              1.traverse left <br />
              2.traverse right <br />
              3.Visit node <br />
              Use recursion to solve these problems:
              <br />
              <code>
                let postOrder=function(node)
                <br />
                if (node==null) return;
                <br />
                postOrder(node.left) //recursion
                <br />
                postOrder(node.right) // magic :)
                <br />
                answer.push(node.val) <br />
              </code>
              <br />
              time complexity O(n)
              <br />
              <div className="center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif"></img>
              </div>
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
            <br />
          </div>
        ) : (
          <div>`Click button to show details`</div>
        )}
      </div>
    );
  }
}
module.exports = DepthFirstSearch;
