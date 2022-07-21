import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./charactersSlice";
import searchCharacterReducer from "./searchCharacterSlice";
import searechComicReducer from "./searchComicSlice";

const store = configureStore({
  reducer: {
    character: characterReducer,
    searchCharacter: searchCharacterReducer,
    searchComic: searechComicReducer,
  },
});

export default store;
