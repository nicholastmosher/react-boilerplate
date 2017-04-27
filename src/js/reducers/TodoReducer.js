import TodoActionTypes from '../constants/TodoActionTypes';
import { fromJS } from 'immutable';
import { TodoItem } from '../data/Records';

const initialState = fromJS({
  todoList: {
    '0': TodoItem({
      id: '0',
      description: 'Buy groceries',
      done: true,
    }),
    '1': TodoItem ({
      id: '1',
      description: 'Pick up car from mechanic',
      done: false,
    }),
  },
  nextTodoId: 2,
});

const TodoReducer = (state = initialState, action) => {

  switch(action.type) {
    case TodoActionTypes.ADD_TODO:
      const nextId = state.get('nextTodoId').toString();
      const item = new TodoItem({
        id: nextId,
        description: action.description,
        done: false,
      });
      return state.setIn([ 'todoList', nextId ], item)
                  .set('nextTodoId', parseInt(nextId) + 1);

    case TodoActionTypes.SET_DONE:
      console.log("Setting " + action.id + " done=" + action.done);
      return state.setIn([ 'todoList', action.id, 'done' ], action.done);

    case TodoActionTypes.CLEAR_DONE:
      const unfinished = state.get('todoList').filter(item => !item.done);
      return state.set('todoList', unfinished);

    default:
      return state;
  }
};

export default TodoReducer;
