import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const configureStore = () => (
  createStore(
    rootReducer,
    compose(
      applyMiddleware(
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
