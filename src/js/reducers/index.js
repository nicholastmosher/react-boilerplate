import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import TodoReducer from './TodoReducer';

const rootReducer = combineReducers({
  TodoReducer,
  router: routerReducer,
});

export default rootReducer;
