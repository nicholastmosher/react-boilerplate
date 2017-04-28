import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const configureStore = (history) => (
  createStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        createLogger({
          level: 'info',
          collapsed: true
        }),
        thunk,
      )
    )
  )
);

export default configureStore;
