import {SIGN_UP_SUBMIT} from './actionType';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUBMIT:
      return [...state, action.store];
    default:
      return state;
  }
};
