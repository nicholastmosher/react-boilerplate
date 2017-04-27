import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../actions/AppActions';

const AppContainer = (props) => (
  <div>
    <h1>Hello, {props.name}!</h1>
    <button onClick={() => props.greet('Bob')}>Bob</button>
    <button onClick={() => props.greet('Ann')}>Ann</button>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.AppReducer.get('greetee'),
});

const mapDispatchToProps = (dispatch) => ({
  greet: (name) => dispatch(sayHello(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
