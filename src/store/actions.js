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

      if (!response.ok) throw new Error(Constants.ERROR_FETCHING_CHARACTERS);

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

      if (!response.ok) throw new Error(Constants.ERROR_FETCHING_COMICS);

      return await response.json();
    };

    try {
      const comicsData = await fetchData();

      if (!comicsData?.data?.results) {
        if (comicsData.code === Constants.REQUEST_THROTTLED)
          Notifications.dispatchTooManyRequests(dispatch);
        else Notifications.dispatchFatchingComicsFailed(dispatch);
        return;
      }

      if (comicsData.data.results.length === 0) {
        Notifications.dispatchComicsListEmpty(dispatch);
      } else {
        const loadedComics = comicsData.data.results.map((comic) => {
          return {
            key: comic.id,
            title: comic.title,
            imgHref: comic.name,
            imgUrl: comic.thumbnail.path,
            description: comic.description,
            modified: comic.modified,
          };
        });

        dispatch(comicsActions.setComicsList(loadedComics));
      }
    } catch (error) {
      Notifications.dispatchFatchingComicsFailed(dispatch);
    }
  };
};
