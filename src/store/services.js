import * as Constants from "../constants";
import * as Helpers from "../helperFunctions";

export const getCharacters = (characterNameStartsWith, limitCharNumber) => {
  return fetch(
    `https://gateway.marvel.com/v1/public/characters?${Helpers.GetCharacterNameStartWith(
      characterNameStartsWith
    )}${Helpers.GetLimitCharactersNumber(limitCharNumber)}ts=${
      process.env.REACT_APP_MARVEL_TS
    }&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${Constants.MD5(
      Constants.HASH
    )}`
  );
};

export const getComics = (characterId) => {
  return fetch(
    `https://gateway.marvel.com/v1/public/comics?${Helpers.getCharacterId(
      characterId
    )}ts=${process.env.REACT_APP_MARVEL_TS}&apikey=${
      process.env.REACT_APP_MARVEL_PUBLIC_KEY
    }&hash=${Constants.MD5(Constants.HASH)}`
  );
};
