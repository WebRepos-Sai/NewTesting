import { combineReducers } from 'redux';
import { reducerOne } from './comment';

export const reducers = combineReducers({
  reducer: reducerOne,
});
