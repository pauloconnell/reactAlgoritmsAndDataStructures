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
      <div>
        <h2> Data Structure:</h2>
        <h1>Binary Tree</h1>
        <b>
          <i className="text">
            “In computer science, a binary tree is a tree data structure in
            which each node has at the most two children, which are referred to
            as the left child and the right child.” — Wikipedia
          </i>
          <br />
          <br />
        </b>

        <br />
        <button onClick={e => this.handleClick(e)}>Binary Tree Details:</button>
        {this.showThis ? (
          <div>
            <h3>Ordering Binary trees </h3>
            <pre>
              <code>Pre-Order, In-Order, or Post-Order Traversal</code>
              <br />
              Knowing which order the tree is traversed allows visualization of
              binary tree structures represented in array form.
              <br />
              <code>
                <pre></pre>
              </code>
              <br />
            </pre>
            <br></br>
          </div>
        ) : (
          `Click button to show details`
        )}
      </div>
    );
  }
}
module.exports = BinaryTree;
