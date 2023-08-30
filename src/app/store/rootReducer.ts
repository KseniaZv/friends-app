import { combineReducers } from '@reduxjs/toolkit';
import friendSlice from '../../entities/friend/api/friendSlice';

export const rootReducer = combineReducers({
  ['friends']: friendSlice,
});
