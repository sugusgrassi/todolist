import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render(){
  return this.props.todoState.map((todoState) => (
      <TodoItem key={todoState.id} todoState={todoState} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
  ));
}
}




// Proptypes. Good practise
Todos.propTypes = {
  todoState: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;