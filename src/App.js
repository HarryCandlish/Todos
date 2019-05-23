import React, { Component } from "react";

import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Read Brothers Karamazov",
        completed: false
      },
      {
        id: 2,
        title: "Finish Portfolio",
        completed: true
      },
      {
        id: 3,
        title: "Complete Blog and Blog Post",
        completed: false
      }
    ]
  };

  markComplete = () => {};

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
