import React from 'react';

const AppContainer = (props) => (
  <div>
    <h1>Hello, {props.name}!</h1>
    <button onClick={() => props.greet('Jack')}>Jack</button>
    <button onClick={() => props.greet('Linda')}>Linda</button>
  </div>
);

export default AppContainer;
