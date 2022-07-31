import { charactersActions } from "./charactersSlice";
import { searchCharacterActions } from "./searchCharacterSlice";
import { comicsActions } from "./comicsSlice";

const hash =
  process.env.REACT_APP_MARVEL_TS +
  process.env.REACT_APP_MARVEL_PRIVATE_KEY +
  process.env.REACT_APP_MARVEL_PUBLIC_KEY;

const md5 = require("md5");

export const fetchCharacters = (characterNameStartsWith, limitCharNumber) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const startWith =
        characterNameStartsWith === ""
          ? ""
          : "nameStartsWith=" + characterNameStartsWith + "&";

      const limit =
        limitCharNumber < 1 || limitCharNumber > 100
          ? ""
          : "limit=" + limitCharNumber + "&";

      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?${startWith}${limit}ts=${
          process.env.REACT_APP_MARVEL_TS
        }&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5(hash)}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch characters!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const charactersData = await fetchData();

      const loadedCharacters = [];

      if (
        charactersData === undefined ||
        charactersData.data === undefined ||
        charactersData.data.results === undefined
      ) {
        if (charactersData.code === "RequestThrottled") {
          dispatch(
            charactersActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Too many Api requests, try latter...",
            })
          );
        } else {
          dispatch(
            charactersActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Fetching characters failed",
            })
          );
        }
      } else if (charactersData.data.results.length === 0) {
        dispatch(
          charactersActions.showNotification({
            status: "empty",
            title: "Warning!",
            message: "Characters list is empty",
          })
        );
      } else {
        for (const key of charactersData.data.results) {
          const character = {
            id: key.id,
            characterId: key.id,
            characterName: key.name,
            imgHref: key.name,
            imgUrl: key.thumbnail.path,
            description: key.description,
            modified: key.modified,
          };

          loadedCharacters.push(character);
        }

        dispatch(searchCharacterActions.setDoSearch(false));

        dispatch(charactersActions.setCharactersList(loadedCharacters));
      }
    } catch (error) {
      dispatch(
        charactersActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching characters data failed!",
        })
      );
    }
  };
};

export const fetchComics = (characterId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const characterIdNumber =
        characterId === "" ? "" : "characters=" + characterId + "&";

      const response = await fetch(
        `https://gateway.marvel.com/v1/public/comics?${characterIdNumber}ts=${
          process.env.REACT_APP_MARVEL_TS
        }&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5(hash)}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch comics!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const comicsData = await fetchData();

      const loadedComics = [];

      if (
        comicsData === undefined ||
        comicsData.data === undefined ||
        comicsData.data.results === undefined
      ) {
        if (comicsData.code === "RequestThrottled") {
          dispatch(
            comicsActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Too many Api requests, try latter...",
            })
          );
        } else {
          dispatch(
            comicsActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Fetching comics failed",
            })
          );
        }
      } else if (comicsData.data.results.length === 0) {
        dispatch(
          comicsActions.showNotification({
            status: "empty",
            title: "Warning!",
            message: "Comics list is empty",
          })
        );
      } else {
        for (const key of comicsData.data.results) {
          const comic = {
            id: key.id,
            title: key.title,
            imgHref: key.name,
            imgUrl: key.thumbnail.path,
            description: key.description,
            modified: key.modified,
          };
          loadedComics.push(comic);
        }

        // dispatch(searchCharacterActions.setDoSearch(false));

        dispatch(comicsActions.setComicsList(loadedComics));
      }
    } catch (error) {
      dispatch(
        comicsActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching comics data failed!",
        })
      );
    }
  };
};
