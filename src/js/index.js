import React from 'react';
import { render } from 'react-dom';
import AppContainer from './containers/AppContainer';

import '../stylesheets/main.scss';
require('bootstrap');

render(
  <AppContainer/>,
  document.getElementById('root')
);
