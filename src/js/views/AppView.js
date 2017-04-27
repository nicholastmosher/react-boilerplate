import React, { Component } from 'react';

const initialState = {
  newItemName: '',
};

class AppView extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  reset = () => this.setState(initialState);
  handleTodoInput = (e) => this.setState({ newItemName: e.target.value });
  handleTodoClick = (item) => this.props.onUpdateTodo(item.id, !item.done);

  todoValid = () => !!this.state.newItemName;

  handleAdd = () => {
    if (this.todoValid()) {
      this.props.onAddTodo(this.state.newItemName);
      this.reset();
    }
  };

  handleClear = () => this.props.onClear();

  render() {
    const items = this.props.items;
    let todoItems = [];
    for (let i in items) {
      if (!items.hasOwnProperty(i)) continue;
      todoItems.push(
        <li key={i}>
          <p>{items[i].description}</p>
          <input type="checkbox"
                 checked={items[i].done}
                 onChange={() => this.handleTodoClick(items[i])}/>
        </li>
      );
    }
    return (
      <div>
        <h1>Todo Items</h1>
        <ul>{todoItems}</ul>
        <h3>Add new todo:</h3>
        <input type="text"
               value={this.state.newItemName}
               onChange={this.handleTodoInput} />
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleClear}>Clear done</button>
      </div>
    );
  }
}

export default AppView;
