import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActions';

const initialState = {
  itemName: '',
  failedSubmit: false,
};

class TodoAddItemView extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  reset = () => this.setState(initialState);
  handleInput = (e) => this.setState({ itemName: e.target.value });
  validInput = () => !!this.state.itemName;

  handleSubmit = () => {
    if (!this.validInput()) {
      this.setState({ failedSubmit: true });
      return;
    }
    this.props.addTodo(this.state.itemName);
    this.reset();
  };

  render() {
    return (
      <div className="input-group todo-input">
        <input type="text"
               className="form-control"
               placeholder="New todo"
               value={this.state.itemName}
               onChange={this.handleInput} />
        <span className="input-group-btn">
          <button className="btn btn-secondary"
                  type="button"
                  onClick={this.handleSubmit}>Add</button>
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (name) => dispatch(addTodo(name)),
});

export default connect(s => s, mapDispatchToProps)(TodoAddItemView);
