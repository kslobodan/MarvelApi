import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./charactersSlice";
import searchCharacterReducer from "./searchCharacterSlice";
import searechComicReducer from "./searchComicSlice";
import comicReducer from "./comicsSlice";

const store = configureStore({
  reducer: {
    character: characterReducer,
    searchCharacter: searchCharacterReducer,
    searchComic: searechComicReducer,
    comic: comicReducer,
  },
});

export default store;
