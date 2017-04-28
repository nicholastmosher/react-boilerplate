import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

import '../stylesheets/main.scss';
require('bootstrap');

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={AppContainer}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
