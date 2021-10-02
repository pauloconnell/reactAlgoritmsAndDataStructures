const React = require("react");
const UnorderedList = require("./UnorderedList");
const Set = require("./DataStructures/Set");
const Array = require("./DataStructures/Array");
const LinkedList = require("./DataStructures/LinkedList");
const BinaryTree = require("./DataStructures/BinaryTree");
const DynamicProgramming = require("./Algorithms/DynamicProgramming");
const RandomPointInCircle = require("./CodingChallenges/RandomPointInCircle");
const DepthFirstSearch = require("./Algorithms/DepthFirstSearch");
const BreadthFirstSearch = require("./Algorithms/BreadthFirstSearch");
const styles = require("../index.css");

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
      <div id="divOne" className="center">
        <h1>Coding Challenge Summary: React App</h1>

        <h2> React Components explain data Structure / Algorithms </h2>

        <div
          className="width95 center"
          style={{ backgroundColor: "lightBlue" }}
        >
          <div className="big center">Data Structures</div>
          <div className="center">
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
            <BinaryTree />
          </div>
        </div>

        <div className="width95" style={{ backgroundColor: "green" }}>
          <div className="center big">Algorithms</div>
          <DynamicProgramming
            showDp={this.state.showDp}
            handleDp={e => this.handleDp(e)}
          />
          <DepthFirstSearch />
          <BreadthFirstSearch />
        </div>
        <div className="orange width95">
          <div className="center big">Code Challenge</div>
          <RandomPointInCircle />
        </div>
      </div>
    );
  }
}

module.exports = MainApp;
