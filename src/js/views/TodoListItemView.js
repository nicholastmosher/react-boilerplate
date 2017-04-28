import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { push } from 'react-router-redux';
import { markTodo, editTodo } from '../actions/TodoActions';

const TodoListItemView = (props) => {
  const id = props.todoId;
  return (
    <div className="input-group">
      <span className="input-group-addon">
        <input type="checkbox"
               checked={props.done(id)}
               onChange={() => props.mark(id, !props.done(id))}/>
      </span>
        <input className={classNames('form-control', { 'todo-done': props.done(id)})}
               type="text"
               value={props.name(id)}
               onChange={(e) => props.edit(id, e.target.value, props.desc(id))}
               onClick={() => props.push(id)}/>
    </div>
  );
};

const mapStateToProps = ({TodoReducer}) => ({
  name: (id) => TodoReducer.getIn([ 'todoItems', id, 'name' ]),
  done: (id) => TodoReducer.getIn([ 'todoItems', id, 'done' ]),
  desc: (id) => TodoReducer.getIn([ 'todoItems', id, 'description' ]),
});

const mapDispatchToProps = (dispatch) => ({
  mark: (id, done) => dispatch(markTodo(id, done)),
  edit: (id, name, desc) => dispatch(editTodo(id, name, desc)),
  push: (id) => dispatch(push('/todos/' + id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItemView);