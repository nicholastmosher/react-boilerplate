import TodoActionTypes from '../constants/TodoActionTypes';
import { Map } from 'immutable';
import { Todo } from '../data/Records';
import { nextKey } from '../data/Utils';

const initialState = Map({
  todoItems: Map({
    '0': Todo({
      id: '0',
      name: 'Get Groceries',
      description: 'Eggs, milk, other generic baking supplies',
      done: false,
    }),
  }),
});

const TodoReducer = (state = initialState, action) => {

  switch(action.type) {
    case TodoActionTypes.ADD_TODO:
      const newTodo = Todo({
        id: nextKey(state.get('todoItems')),
        name: action.name,
        description: '',
        done: false,
      });
      return state.setIn([ 'todoItems', newTodo.id ], newTodo);

    case TodoActionTypes.MARK_TODO:
      return state.setIn([ 'todoItems', action.id, 'done' ], action.checked);

    case TodoActionTypes.EDIT_TODO:
      return state.updateIn([ 'todoItems', action.id ], todo => (
        todo.set('name', action.name).set('description', action.description)
      ));

    default:
      return state;
  }
};

export default TodoReducer;
