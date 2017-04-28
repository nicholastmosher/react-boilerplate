import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import AppReducer from './AppReducer';

const rootReducer = combineReducers({
  AppReducer,
  router: routerReducer,
});

export default rootReducer;
