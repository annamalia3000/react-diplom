import { combineReducers, configureStore } from "@reduxjs/toolkit";

import searchReducer from '../slicers/searchSlice'
// import cardReducer from "../slicers/usersSlice";


const rootReducer = combineReducers({
  search: searchReducer,
  // card: cardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

