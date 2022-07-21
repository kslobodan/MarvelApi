import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  searchString: "",
};

const searchComicSlice = createSlice({
  name: "searchComic",
  initialState: initialSearchState,
  reducers: {
    setSearchString(state, action) {
      state.searchString = action.payload;
    },
    clearSearchString(state, action) {
      state.searchString = "";
    },
  },
});

export const searchComicActions = searchComicSlice.actions;

export default searchComicSlice.reducer;
