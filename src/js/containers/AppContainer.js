import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { setSaying } from '../actions/AppActions';

let GreetComponent = (props) => (
  <h1>{props.saying}, {props.match.params.name}!</h1>
);

const mapStateToProps = (state) => ({
  saying: state.AppReducer.get('greetOrBye'),
});

GreetComponent = connect(mapStateToProps)(GreetComponent);

const AppContainer = (props) => (
  <div>
    <Redirect from="/" to="/John"/>
    <Route path="/:name" component={GreetComponent}/>
    <button onClick={() => props.say('Hello')}>Say Hello</button>
    <button onClick={() => props.say('Goodbye')}>Say Goodbye</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  say: (saying) => dispatch(setSaying(saying)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
