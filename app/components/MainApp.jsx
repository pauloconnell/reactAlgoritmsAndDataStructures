const React = require("react");
const UnorderedList = require("./UnorderedList");
const Set = require("./DataStructures/Set");
const Array = require("./DataStructures/Array");
const LinkedList = require("./DataStructures/LinkedList");
const DynamicProgramming = require("./Algorithms/DynamicProgramming");
const RandomPointInCircle = require("./CodingChallenges/RandomPointInCircle");

/* the main page for the index route of this app */
class MainApp extends React.Component {
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
    console.log("array pressed");
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
      <div>
        <center>
          <h1>React App</h1>

          <h2> React Components added for each: </h2>
        </center>
          <div style={{ backgroundColor: "lightBlue" }}>
            <Set
              showSet={this.state.showSet}
              handleSet={e => this.handleSet(e)}
            />
            <Array
              showArray={this.state.showArray}
              handleArray={e => this.handleArray(e)}
            />
            <LinkedList
              showLinkedList={this.state.showLinkedList}
              handleLinkedList={e => this.handleLinkedList(e)}
            />
          </div>
          <div style={{ backgroundColor: "green" }}>
            <DynamicProgramming
              showDp={this.state.showDp}
              handleDp={e => this.handleDp(e)}
            />
          </div>
          <div class="orange">
            <RandomPointInCircle />
          </div>

      </div>
    );
  }
}

module.exports = MainApp;
