import {SET_USER_DATA} from './actionType';
import {put, takeEvery} from 'redux-saga/effects';

function* userData() {
  const url = 'https://dummyjson.com/users';
  let data = yield fetch(url);
  data = yield data.json();
  yield put({type: SET_USER_DATA, data});
  console.log('object');
}

function* SagaExmp() {
  yield takeEvery(SET_USER_DATA, userData);
}

export default SagaExmp;
