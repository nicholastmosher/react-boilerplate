import TodoActionTypes from '../constants/TodoActionTypes';

export const addTodo = (name) => ({ type: TodoActionTypes.ADD_TODO, name });
export const markTodo = (id, checked) => ({ type: TodoActionTypes.MARK_TODO, name, id, checked });
export const editTodo = (id, name, description) => ({ type: TodoActionTypes.EDIT_TODO, id, name, description });
