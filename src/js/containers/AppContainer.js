import React from 'react';
import { Route } from 'react-router-dom';

const URLView = (props) => (
  <h2>{props.match.params.anything}</h2>
);

const AppContainer = (props) => (
  <div>
    <h1>Hello, React Router!</h1>
    <Route path="/:anything" component={URLView} />
  </div>
);

export default AppContainer;
