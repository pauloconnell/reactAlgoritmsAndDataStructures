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
        Depth First means to drill down as deep as possible
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

              <h4>
                <br />
                <br />
              </h4>
            </center>
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
