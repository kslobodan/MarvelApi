import { charactersActions } from "./charactersSlice";
import { searchCharacterActions } from "./searchCharacterSlice";
import { comicsActions } from "./comicsSlice";
import * as Constants from "../constants";
import * as Services from "./services";
import * as Notifications from "./notifications";

export const fetchCharacters = (characterNameStartsWith, limitCharNumber) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await Services.getCharacters(
        characterNameStartsWith,
        limitCharNumber
      );

      if (!response.ok) {
        throw new Error(Constants.ERROR_FETCHING_CHARACTERS);
      }

      return await response.json();
    };

    try {
      const charactersData = await fetchData();

      if (!charactersData?.data?.results) {
        if (charactersData.code === Constants.REQUEST_THROTTLED)
          Notifications.dispatchTooManyRequests(dispatch);
        else Notifications.dispatchFatchingCharactersFailed(dispatch);
        return;
      }

      if (charactersData.data.results.length === 0) {
        Notifications.dispatchCharactersListEmpty(dispatch);
      } else {
        const loadedCharacters = charactersData.data.results.map(
          (character) => {
            return {
              key: character.id,
              characterId: character.id,
              characterName: character.name,
              imgHref: character.name,
              imgUrl: character.thumbnail.path,
              description: character.description,
              modified: character.modified,
            };
          }
        );

        dispatch(searchCharacterActions.setDoSearch(false));
        dispatch(charactersActions.setCharactersList(loadedCharacters));
      }
    } catch (error) {
      Notifications.dispatchFatchingCharactersFailed(dispatch);
    }
  };
};

export const fetchComics = (characterId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await Services.getComics(characterId);

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
