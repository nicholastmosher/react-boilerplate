import React from 'react';
import { connect } from 'react-redux';
import TodoListItemView from './TodoListItemView';
import TodoAddItemView from './TodoAddItemView';

const TodoListView = (props) => (
  <div className={props.className}>
    <TodoAddItemView />
    {props.items.map(item =>
      <TodoListItemView key={item.id} todoId={item.id}/>
    )}
  </div>
);

const mapStateToProps = ({TodoReducer}) => ({
  items: TodoReducer.get('todoItems').valueSeq(),
});

export default connect(mapStateToProps)(TodoListView);