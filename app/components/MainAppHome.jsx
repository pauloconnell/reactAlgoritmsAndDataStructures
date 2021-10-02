const React = require("react");
const UnorderedList = require("./UnorderedList");
const Set = require("./DataStructures/Set");
const Array = require("./DataStructures/Array");
const LinkedList = require("./DataStructures/LinkedList");
const DynamicProgramming = require("./Algorithms/DynamicProgramming");
const RandomPointInCircle = require("./CodingChallenges/RandomPointInCircle");
const DepthFirstSearch = require("./Algorithms/DepthFirstSearch");
const BreadthFirstSearch = require("./Algorithms/BreadthFirstSearch");
const styles = require("../index.css");
/* the main page for the index route of this app */








//   MainApp   is the one being used

// note this is an alternative layout I was considering, but will likely delete this component



















class MainAppHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSet: false,
      showArray: false,
      showLinkedList: false,
      showDp: false
    };
    this.handleSet = this.handleSet.bind(this);
    this.handleArray = this.handleArray.bind(this);
    this.handleLinkedList = this.handleLinkedList.bind(this);
    this.handleDp = this.handleDp.bind(this);
  }

  componentDidMount() {}

  handleSet(e) {
    console.log("set pressed");
    this.setState({ showSet: !this.state.showSet });
  }

  handleArray(e) {
    console.log("array pressed");
    this.setState({ showArray: !this.state.showArray });
  }

  handleLinkedList(e) {
    console.log("Linked List pressed");
    this.setState({ showLinkedList: !this.state.showLinkedList });
  }

  handleDp(e) {
    console.log("Dp pressed");
    this.setState({ showDp: !this.state.showDp });
  }
  render() {
    return (
      <div id="divOne">
        <div id="div2">React.js N</div>
        <center>
          <h1>Lessons from Coding Challenges as a React App</h1>

          <h2> React Components added for each: </h2>
        </center>
        <div style={{ backgroundColor: "lightBlue" }}>
          <div className="container">
            <div className="jumbotron">
              Data Structures:
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSet()}
              >
                Set
              </button>
              {this.state.showSet ? (
                <Set
                  showSet={this.state.showSet}
                  handleSet={e => this.handleSet(e)}
                />
              ) : (
                "click button to show details"
              )}
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleArray()}
              >
                Array
              </button>
              {this.state.showArray ? (
                <Array
                  showArray={this.state.showArray}
                  handleArray={e => this.handleArray(e)}
                />
              ) : (
                "click button to show details"
              )}
              <button
                type="button"
                className="btn btn-primary"
                onClick={e => this.handleLinkedList(e)}
              >
                Linked List
              </button>
              {this.state.showLinkedList ? (
                <LinkedList
                  showLinkedList={this.state.showLinkedList}
                  handleLinkedList={e => this.handleLinkedList(e)}
                />
              ) : (
                "click button to show details"
              )}
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "green" }}>
          <div className="container">
            <div className="jumbotron">
              <button type="button">Dynamic Programming</button>
              <button type="button" href="./Algorithms/DepthFirstSearch">
                Depth First Search
              </button>
              <button type="button" href={BreadthFirstSearch}>
                Breadth First Search
              </button>
            </div>
          </div>
        </div>
        <div className="orange">
          <div className="container">
            <div className="jumbotron">
              Coding Challenges
              <button type="button" href={RandomPointInCircle}>
                Random Point In Circle
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MainAppHome;
