import React from 'react';
import { connect } from 'react-redux';
import { setDone } from '../actions/TodoActions';

const TodoItem = (props) => (
  <li key={props.key}>
    <p>{props.item.description}</p>
    <input type="checkbox"
           checked={props.item.done}
           onChange={() => props.check(props.item.id, !props.item.done)} />
  </li>
);

const mapDispatchToProps = (dispatch) => ({
  check: (id, done) => dispatch(setDone(id, done)),
});

export default connect(s => s, mapDispatchToProps)(TodoItem);
