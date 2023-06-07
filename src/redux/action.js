import {SIGN_UP_SUBMIT} from './actionType';

export function signUp(data) {
  return {
    type: SIGN_UP_SUBMIT,
    store: data,
  };
}
