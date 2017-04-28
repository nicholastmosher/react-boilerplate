import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { markTodo, editTodo } from '../actions/TodoActions';

const TodoDetailsView = (props) => {
  const id = props.todoId;
  const name = props.name(id);
  const done = props.done(id);
  return (
    <div className="col-md-6">
      <h1 className={classNames('todo-header', {'todo-done': done})}>
        {name}
      </h1>
      <div className="form-group">
        <label>Description:</label>
        <textarea className="form-control"
                  value={props.details(id)}
                  onChange={(e) => props.edit(id, name, e.target.value)} />
      </div>
    </div>
  );
};

const mapStateToProps = ({TodoReducer}) => ({
  name: (id) => TodoReducer.getIn([ 'todoItems', id, 'name' ]),
  done: (id) => TodoReducer.getIn([ 'todoItems', id, 'done' ]),
  details: (id) => TodoReducer.getIn([ 'todoItems', id, 'description' ]),
});

const mapDispatchToProps = (dispatch) => ({
  mark: (id, done) => dispatch(markTodo(id, done)),
  edit: (id, name, desc) => dispatch(editTodo(id, name, desc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailsView);