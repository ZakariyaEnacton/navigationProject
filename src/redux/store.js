import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import createSagaMiddlware from 'redux-saga';
import SagaExmp from './saga';

const sagaMiddleware = createSagaMiddlware();
const data = configureStore({
  reducer: reducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(SagaExmp);
export default data;
