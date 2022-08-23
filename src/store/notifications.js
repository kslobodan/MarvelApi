import * as Constants from "../constants";
import { charactersActions } from "./charactersSlice";
import { comicsActions } from "./comicsSlice";

//Characters

export const dispatchCharactersListEmpty = (dispatch) => {
  dispatch(
    charactersActions.showNotification({
      status: Constants.EMPTY_STATUS,
      title: Constants.WARNING_TITLE,
      message: Constants.CHARACTERS_LIST_EMPTY,
    })
  );
};

export const dispatchTooManyRequests = (dispatch) => {
  dispatch(
    charactersActions.showNotification({
      status: Constants.ERROR_STATUS,
      title: Constants.ERROR_TITLE,
      message: Constants.TOO_MANY_REQUESTS,
    })
  );
};

export const dispatchFatchingCharactersFailed = (dispatch) => {
  dispatch(
    charactersActions.showNotification({
      status: Constants.ERROR_STATUS,
      title: Constants.ERROR_TITLE,
      message: Constants.FATCHING_CHARACTERS_FAILED,
    })
  );
};

//Comics

export const dispatchFatchingComicsFailed = (dispatch) => {
  dispatch(
    comicsActions.showNotification({
      status: Constants.ERROR_STATUS,
      title: Constants.ERROR_TITLE,
      message: Constants.FATCHING_COMICS_FAILED,
    })
  );
};

export const dispatchComicsListEmpty = (dispatch) => {
  dispatch(
    comicsActions.showNotification({
      status: Constants.EMPTY_STATUS,
      title: Constants.WARNING_TITLE,
      message: Constants.COMICS_LIST_EMPTY,
    })
  );
};
