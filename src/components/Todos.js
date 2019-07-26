import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTodos, markComplete,delTodo } from '../actions/todoActions'

class Todos extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  };

  render() {
    return this.props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} 
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo} />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return ({
    todos: state.todos.todos
  })
}

export default connect(mapStateToProps, {fetchTodos, markComplete, delTodo})(Todos);
