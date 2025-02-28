import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: "",
};

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const searchSlice = createSliceWithThunk({
  name: "search",
  initialState,
  reducers: (create) => ({
    changeSearchField: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      }
    ),
  }),
});

export const { changeSearchField } = searchSlice.actions;
export default searchSlice.reducer;
