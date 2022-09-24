import * as Constants from "../constants";
import * as Helpers from "../helperFunctions";
// import axios from "axios";

export const getCharacters = (characterNameStartsWith, limitCharNumber) => {
  const result = fetch(
    `https://gateway.marvel.com/v1/public/characters?${Helpers.GetCharacterNameStartWith(
      characterNameStartsWith
    )}${Helpers.GetLimitCharactersNumber(limitCharNumber)}ts=${
      process.env.REACT_APP_MARVEL_TS
    }&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${Constants.MD5(
      Constants.HASH
    )}`
  );

  console.log(result);

  return result;
};

// export const getCharacters = (characterNameStartsWith, limitCharNumber) => {
//   let responseAxios;

//   axios
//     .get(
//       `https://gateway.marvel.com/v1/public/characters?${Helpers.GetCharacterNameStartWith(
//         characterNameStartsWith
//       )}${Helpers.GetLimitCharactersNumber(limitCharNumber)}ts=${
//         process.env.REACT_APP_MARVEL_TS
//       }&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${Constants.MD5(
//         Constants.HASH
//       )}`
//     )
//     .then((response) => {
//       responseAxios = response.data.data.results;
//       //   console.log(response.data.data.results);
//     })
//     .catch((error) => {
//       console.error("There was an error!", error);
//     });

//   return responseAxios.json();
// };

export const getComics = (characterId) => {
  return fetch(
    `https://gateway.marvel.com/v1/public/comics?${Helpers.getCharacterId(
      characterId
    )}ts=${process.env.REACT_APP_MARVEL_TS}&apikey=${
      process.env.REACT_APP_MARVEL_PUBLIC_KEY
    }&hash=${Constants.MD5(Constants.HASH)}`
  );
};
