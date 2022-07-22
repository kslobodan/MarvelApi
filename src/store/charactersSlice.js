import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "character",
  initialState: {
    characterId: 0,
    currentCharacterId: 0,
    charactersList: [],
  },
  reducers: {
    setCharacterId(state, action) {
      state.characterId = action.characterId;
    },
    clearCharacterId(state) {
      state.characterId = 0;
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
