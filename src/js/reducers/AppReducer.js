import AppActionTypes from '../constants/AppActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  name: 'Johnny',
});

const AppReducer = (state = initialState, action) => {

  switch(action.type) {
    case AppActionTypes.SAY_HELLO:
      return state.set('name', action.name);

    default:
      return state;
  }
};

export default AppReducer;
