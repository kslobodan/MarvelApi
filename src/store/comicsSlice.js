import { createSlice } from "@reduxjs/toolkit";

const initialComicState = {
  characterId: 0,
  comicsList: [],
  notification: null,
};

const comicsSlice = createSlice({
  name: "comic",
  initialState: initialComicState,
  reducers: {
    setCharacterId(state, action) {
      state.characterId = action.payload;
    },
    clearCharacterId(state) {
      state.characterId = 0;
    },
    setComicsList(state, action) {
      state.comicsList = action.payload;
    },
    clearComicsList(state) {
      state.comicsList = [];
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

export const comicsActions = comicsSlice.actions;

export default comicsSlice.reducer;
