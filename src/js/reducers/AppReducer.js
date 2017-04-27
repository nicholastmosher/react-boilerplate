import AppActionTypes from '../constants/AppActionTypes';
import { Map } from 'immutable';

const initialState = Map({ greetee: 'John', });

const AppReducer = (state = initialState, action) => {

  switch(action.type) {
    case AppActionTypes.SAY_HELLO:
      return state.set('greetee', action.name);

    default:
      return state;
  }
};

export default AppReducer;
