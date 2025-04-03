import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slicers/searchSlice";
import cartCountReducer from "../slicers/cartCountSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  cartCount: cartCountReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
