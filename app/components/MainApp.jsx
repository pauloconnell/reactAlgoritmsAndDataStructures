const React = require("react");
const UnorderedList = require("./UnorderedList");
const Set = require("./DataStructures/Set");
const Array = require("./DataStructures/Array");
const LinkedList = require("./DataStructures/LinkedList");
/* the main page for the index route of this app */
class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSet: false,
      showArray: false,
      showLinkedList: false
    };
    this.handleSet = this.handleSet.bind(this);
    this.handleArray = this.handleArray.bind(this);
    this.handleLinkedList = this.handleLinkedList.bind(this);
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

  render() {
    return (
      <div>
        <h1>React App</h1>
        <h2> Components added for Key algorithms and Data Structures</h2>
        <Set showSet={this.state.showSet} handleSet={e => this.handleSet(e)} />
        <Array
          showArray={this.state.showArray}
          handleArray={e => this.handleArray(e)}
        />
        <LinkedList
          showLinkedList={this.state.showLinkedList}
          handleLinkedList={e=> this.handleLinkedList(e)}
          />
      </div>
    );
  }
}

module.exports = MainApp;
