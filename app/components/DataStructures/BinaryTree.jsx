const React = require("react");
class BinaryTree extends React.Component {
  //let code = "{ a - b}"; // curly brackets cause problems in JSX, so just use variable
  //let showThis = true;

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
        <h2> Data Structure:</h2>
        <h1>Binary Tree</h1>
        <div>
          <b>
            <i>
              “In computer science, a binary tree is a tree data structure in
              which each node has at the most two children, which are referred
              to as the left child and the right child.” — Wikipedia
            </i>
            <br />
            <br />
          </b>

          <br />
          <button
            title="Click button to show details"
            onClick={e => this.handleClick(e)}
          >
            Binary Tree Details:
          </button>
        </div>
        {this.state.showThis ? (
          <div className="blue">
            <h3>Ordering Binary trees </h3>
            <code>
              Pre-Order, In-Order, or Post-Order Traversal defines how the graph
              is translated to an array
            </code>
            <br />
            <br />
            Depending on which order of traversal is used, the indexes of the
            array represent coresponding nodes of the graph.
            <br />
            <code></code>
            <br />
          </div>
        ) : (
          <div>Click button to show details</div>
        )}
      </div>
    );
  }
}
module.exports = BinaryTree;
