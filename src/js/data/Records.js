import { Record } from 'immutable';

export const Todo = new Record({
  id: undefined,
  name: '',
  description: '',
  done: false,
});