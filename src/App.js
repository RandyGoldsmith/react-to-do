import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.counter = 3;
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true,  id: 0},
        { description: 'Throw the dishes away', isCompleted: false, id: 1},
        { description: 'Buy new dishes', isCompleted: false, id: 2}
      ],
      newTodoDescription: ''
    };
  }


  deleteTodo(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: todos });
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }


  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false, id: this.counter ++};
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }


  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) }  deleteTodo={ () => this.deleteTodo(id) } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription} onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>

      </div>
    );
  }
}

export default App;
//for changes
