import { charactersActions } from "./charactersSlice";
import { searchCharacterActions } from "./searchCharacterSlice";
import { comicsActions } from "./comicsSlice";
import * as Constants from "../constants";
import * as Services from "./services";
import * as Notifications from "./notifications";

export const fetchCharacters = (characterNameStartsWith, limitCharNumber) => {
  return async (dispatch) => {
    try {
      const charactersData = await fetchCharactersData(
        characterNameStartsWith,
        limitCharNumber
      );

      if (!charactersData?.data?.results) {
        !charactersData?.data?.results &&
        charactersData.code === Constants.REQUEST_THROTTLED
          ? Notifications.dispatchTooManyRequests(dispatch)
          : Notifications.dispatchFatchingCharactersFailed(dispatch);

        return;
      }

      charactersData.data.results.length === 0
        ? Notifications.dispatchCharactersListEmpty(dispatch)
        : setCharactersList(dispatch, charactersData);
    } catch (error) {
      Notifications.dispatchFatchingCharactersFailed(dispatch);
    }
  };
};

export const fetchComics = (characterId) => {
  return async (dispatch) => {
    try {
      const comicsData = await fetchData(characterId);

      if (!comicsData?.data?.results) {
        comicsData.code === Constants.REQUEST_THROTTLED
          ? Notifications.dispatchTooManyRequests(dispatch)
          : Notifications.dispatchFatchingComicsFailed(dispatch);
        return;
      }

      comicsData.data.results.length === 0
        ? Notifications.dispatchComicsListEmpty(dispatch)
        : setComicsList(dispatch, comicsData);
    } catch (error) {
      Notifications.dispatchFatchingComicsFailed(dispatch);
    }
  };
};

const setCharactersList = (dispatch, charactersData) => {
  const loadedCharacters = charactersData.data.results.map((character) => {
    return {
      key: character.id,
      characterId: character.id,
      characterName: character.name,
      imgHref: character.name,
      imgUrl: character.thumbnail.path,
      description: character.description,
      modified: character.modified,
    };
  });

  dispatch(searchCharacterActions.setDoSearch(false));
  dispatch(charactersActions.setCharactersList(loadedCharacters));
};

const fetchCharactersData = async (
  characterNameStartsWith,
  limitCharNumber
) => {
  const response = await Services.getCharacters(
    characterNameStartsWith,
    limitCharNumber
  );

  if (!response.ok) throw new Error(Constants.ERROR_FETCHING_CHARACTERS);

  return await response.json();
};

const fetchData = async (characterId) => {
  const response = await Services.getComics(characterId);

  if (!response.ok) throw new Error(Constants.ERROR_FETCHING_COMICS);

  return await response.json();
};

const setComicsList = (dispatch, comicsData) => {
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
};
