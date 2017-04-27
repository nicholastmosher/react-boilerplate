import TodoActionTypes from '../constants/TodoActionTypes';

export const addTodo = (description) => ({ type: TodoActionTypes.ADD_TODO, description });
export const setDone = (id, done) => ({ type: TodoActionTypes.SET_DONE, id, done });
export const clearDone = () => ({ type: TodoActionTypes.CLEAR_DONE });
