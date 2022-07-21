import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  characterNameStartsWith: "",
  limitCharacterNumber: 1,
  doSearch: true,
};

const searchCharacterSlice = createSlice({
  name: "searchCharacter",
  initialState: initialSearchState,
  reducers: {
    setCharacterNameStartsWith(state, action) {
      state.characterNameStartsWith = action.payload;
    },
    setLimitCharacterNumber(state, action) {
      state.limitCharacterNumber = action.payload;
    },
    setDoSearch(state, action) {
      state.doSearch = action.payload;
    },
    clearSearchParameters(state) {
      state.characterNameStartsWith = "";
      state.limitCharacterNumber = 0;
      state.doSearch = true;
    },
  },
});

export const searchCharacterActions = searchCharacterSlice.actions;

export default searchCharacterSlice.reducer;
