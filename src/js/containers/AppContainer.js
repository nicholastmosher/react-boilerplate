import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../actions/AppActions';

const AppContainer = (props) => (
  <div>
    <h1>Hello, React!</h1>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.AppReducer.get('name'),
});

const mapDispatchToProps = (dispatch) => ({
  greet: (name) => dispatch(sayHello(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
