import AppActionTypes from '../constants/AppActionTypes';
import { Map } from 'immutable';

const initialState = Map({ greetOrBye: 'Hello', });

const AppReducer = (state = initialState, action) => {

  switch(action.type) {
    case AppActionTypes.SET_SAYING:
      return state.set('greetOrBye', action.say);

    default:
      return state;
  }
};

export default AppReducer;
