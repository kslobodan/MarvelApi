export const HASH =
  process.env.REACT_APP_MARVEL_TS +
  process.env.REACT_APP_MARVEL_PRIVATE_KEY +
  process.env.REACT_APP_MARVEL_PUBLIC_KEY;

export const MD5 = require("md5");

export const ERROR_STATUS = "error";
export const EMPTY_STATUS = "empty";
export const ERROR_TITLE = "Error!";
export const WARNING_TITLE = "Warning!";
export const TOO_MANY_REQUESTS = '"Too many Api requests, try latter...';
export const FATCHING_CHARACTERS_FAILED = "Fetching characters data failed!";
export const CHARACTERS_LIST_EMPTY = "Characters list is empty";
export const FATCHING_COMICS_FAILED = "Fetching comics data failed!";
export const COMICS_LIST_EMPTY = "Comics list is empty";

export const REQUEST_THROTTLED = "RequestThrottled";

export const ERROR_FETCHING_CHARACTERS = "Could not fetch characters!";
export const ERROR_FETCHING_COMICS = "Could not fetch comics!";
