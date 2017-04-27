import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

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
