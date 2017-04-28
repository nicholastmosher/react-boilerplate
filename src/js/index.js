import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import AppContainer from './containers/AppContainer';

render(
  <HashRouter>
    <Route path="/" component={AppContainer} />
  </HashRouter>,
  document.getElementById('root')
);
