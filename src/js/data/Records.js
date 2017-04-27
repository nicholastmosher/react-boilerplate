import { Record } from 'immutable';

export const TodoItem = new Record({
  id: undefined,
  description: '',
  done: false,
}, 'TodoItem');
