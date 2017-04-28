import React from 'react';
import classNames from 'classnames';
import TodoListView from './TodoListView';
import TodoDetailsView from './TodoDetailsView';

const TodoView = (props) => {
  const todoId = props.match.params.todoId;
  const hasTodo = !!todoId;
  const details = hasTodo ? <TodoDetailsView todoId={todoId}/> : null;
  return (
    <div className="container-fluid">
      <div className="row">
        <TodoListView className={classNames({
          'col-md-12': !hasTodo,
          'col-md-6': hasTodo,
        })}/>
        {details}
      </div>
    </div>
  );
};

export default TodoView;