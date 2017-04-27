import React, { Component } from 'react';
import AppView from '../views/AppView';

const initialState = {
  todoItems: {
    0: {
      id: 0,
      description: 'Buy groceries',
      done: true,
    },
    1: {
      id: 1,
      description: 'Pick up car from mechanic',
      done: false,
    },
  },
  nextTodoId: 2,
};

class AppContainer extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  addTodoItem = (description) => {
    this.setState(oldState => {

      const newTodoItems = oldState.todoItems;
      newTodoItems[oldState.nextTodoId] = {
        id: oldState.nextTodoId,
        description: description,
        done: false,
      };

      return {
        todoItems: newTodoItems,
        nextTodoId: (oldState.nextTodoId + 1),
      };
    });
  };

  setTodoDone = (id, done) => {
    this.setState(oldState => {

      const updatedTodoItem = oldState.todoItems[id];
      updatedTodoItem.done = done;

      const newTodoItems = oldState.todoItems;
      newTodoItems[id] = updatedTodoItem;

      return {
        todoItems: newTodoItems,
        nextTodoId: oldState.nextTodoId,
      }
    });
  };

  clearDone = () => {
    this.setState(oldState => {

      const updatedItemList = [ ];
      for (let i in oldState.todoItems) {
        if (!oldState.todoItems.hasOwnProperty(i)) continue;
        if (!oldState.todoItems[i].done)
          updatedItemList.push(oldState.todoItems[i]);
      }

      return { todoItems: updatedItemList };
    });
  };

  render() {
    return (
      <div>
        <AppView items={this.state.todoItems}
                 onAddTodo={this.addTodoItem}
                 onUpdateTodo={this.setTodoDone}
                 onClear={this.clearDone} />
      </div>
    )
  }
}

export default AppContainer;
