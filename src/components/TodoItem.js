import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    const { id, title } = this.props.todo;
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        <p>
          {title}
          <button onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
