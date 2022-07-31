import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "character",
  initialState: {
    currentCharacterId: 0,
    charactersList: [],
    notification: null,
  },
  reducers: {
    setCharactersList(state, action) {
      state.charactersList = action.payload;
    },
    clearCharacterList(state) {
      state.charactersList = [];
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const charactersActions = charactersSlice.actions;

export default charactersSlice.reducer;
