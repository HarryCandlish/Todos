import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li key={todo.id}>
            <TodoItem todo={todo} markComplete={this.props.markComplete} />
          </li>
        ))}
      </ul>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
