import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, clearDone } from '../actions/TodoActions';
import TodoItem from '../views/TodoItem';

const initialState = {
  newItemName: '',
};

class TodoView extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  reset = () => this.setState(initialState);
  todoValid = () => !!this.state.newItemName;
  handleTodoInput = (e) => this.setState({ newItemName: e.target.value });
  handleSubmitAdd = () => {
    if (!this.todoValid()) return;
    this.props.add(this.state.newItemName);
    this.reset();
  };

  render() {
    return (
      <div>
        <h1>Todo Items</h1>
        <ul>
          {this.props.items.entrySeq().map(([key, value]) => (
            <TodoItem key={key} item={value}/>
          ))}
        </ul>
        <h3>Add new todo:</h3>
        <input type="text"
               value={this.state.newItemName}
               onChange={this.handleTodoInput} />
        <button onClick={this.handleSubmitAdd}>Add</button>
        <button onClick={this.props.clear}>Clear done</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.TodoReducer.get('todoList'),
});

const mapDispatchToProps = (dispatch) => ({
  add: (description) => dispatch(addTodo(description)),
  clear: () => dispatch(clearDone()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoView);
