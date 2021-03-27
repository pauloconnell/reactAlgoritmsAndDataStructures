const React = require("react");

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
      <div>
        <h2> Algorithm</h2>
        <h1>Depth First Search</h1>
        <h2>DFS</h2>
        Depth First means to drill down as deep as possible, then backtrack
        <br />
        <button
          onClick={e => {
            this.handleClick();
            console.log("clicked", e.target);
          }}
        >
          Click Me
        </button>
        {this.state.showThis}
        {this.state.showThis ? (
          <div>
            <center>
              <h3>Depth First Search:</h3>
              Associated with
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
            Use recursion to solve these problems:
            <br />
            <code>
              let preOrder=function(node) <br />
              if node==null then return
              <br />
              visit(node)-ie answer.push(node.val) <br />
              preOrder(node.left) //recursion
              <br />
              preOrder(node.right) // magic :)
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
              <br />. preOrder(node.left) //recursion
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
              <br />
              <figure>
                <figcaption>Depth First Search</figcaption>
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
          `Click button to show details`
        )}
      </div>
    );
  }
}
module.exports = DepthFirstSearch;
