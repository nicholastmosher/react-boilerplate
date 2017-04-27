import AppActionTypes from '../constants/AppActionTypes';

export const sayHello = (name) => ({ type: AppActionTypes.SAY_HELLO, name });
