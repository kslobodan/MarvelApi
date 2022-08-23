import * as Constants from "../constants";
import { charactersActions } from "./charactersSlice";

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
