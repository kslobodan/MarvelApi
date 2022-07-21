import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "character",
  initialState: {
    currentCharacterId: 0,
    charactersList: [],
  },
  reducers: {
    setCharacterId(state, action) {
      state.setCharacterId = action.setCharacterId;
    },
    setCharactersList(state, action) {
      state.charactersList = action.payload;
    },
    clearCharacterList(state) {
      state.charactersList = [];
    },
  },
});

export const charactersActions = charactersSlice.actions;

export default charactersSlice.reducer;
