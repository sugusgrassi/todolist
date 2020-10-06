import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from  './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  state = {
    todoState: []
  }


  // Toggle Complete
  markComplete = (id) => {
      this.setState({ todoState: this.state.todoState.map(value => {
        if(value.id === id) {
          value.completed =!value.completed
        }
        return value;
      })})
  }

  //  Delete Todo
  delTodo =(id)=> {
    this.setState({ todoState: [...this.state.todoState.filter(value => value.id !== id)] }) 
  }


// Add todo
addTodo = (title) => {
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false
  }
  this.setState({ todoState: [...this.state.todoState, newTodo]});
}

render(){
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props => (
        <React.Fragment>
          <AddTodo addTodo={this.addTodo} />
          <Todos todoState ={this.state.todoState} markComplete={this.markComplete} delTodo = {this.delTodo}/> {/*to embed a component in the main App and pass whatever it has as a props*/}
        </React.Fragment>
      )} />
      <Route path="/about" render={About} />
      </div>
    </div>
    </Router>
  );
} 
}

export default App;