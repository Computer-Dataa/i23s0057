import { combineReducers, configureStore }
  from '@reduxjs/toolkit';

import { ColorSlice } from '../slices/color'

const reducer = combineReducers({
  [ColorSlice.path]: ColorSlice.reducer,
});

export const store = configureStore({
  reducer,
})