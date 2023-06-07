import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';

const data = configureStore({
  reducer: reducer,
});

export default data;
