import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavigationView from '../views/NavigationView';
import TodoView from '../views/TodoView';

const AppContainer = (props) => (
  <div>
    <NavigationView/>
    <Redirect from="/" to="/todos"/>
    <Switch>
      <Route path="/todos/:todoId" component={TodoView} />
      <Route path="/todos" component={TodoView} />
    </Switch>
  </div>
);

export default AppContainer;
