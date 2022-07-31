import { Fragment, useEffect, useState } from "react";
import Character from "./Character";
import Search from "./SearchCharacters";
import { Row, Col, Container } from "reactstrap";
import classes from "./CharactersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { charactersActions } from "../store/charactersSlice";
import { searchCharacterActions } from "../store/searchCharacterSlice";
import { fetchCharacters } from "../store/actionsSlice";

const CharactersList = () => {
  const dispatch = useDispatch();

  const [errorGettingCharacters, setErrorGettingCharacters] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error getting characters");
  const [charactersListEmpty, setCharactersListEmpty] = useState(false);

  const characters = useSelector((state) => state.character).charactersList;
  const characterNameStartsWith = useSelector(
    (state) => state.searchCharacter
  ).characterNameStartsWith;

  const performSearch = useSelector((state) => state.searchCharacter).doSearch;
  const limitCharNumber = useSelector(
    (state) => state.searchCharacter
  ).limitCharacterNumber;

  useEffect(() => {
    // const fetchCharacters = async () => {
    //   if (performSearch) {
    //     console.log("data get");
    //     const hash =
    //       process.env.REACT_APP_MARVEL_TS +
    //       process.env.REACT_APP_MARVEL_PRIVATE_KEY +
    //       process.env.REACT_APP_MARVEL_PUBLIC_KEY;
    //     var md5 = require("md5");
    //     const startWith =
    //       characterNameStartsWith === ""
    //         ? ""
    //         : "nameStartsWith=" + characterNameStartsWith + "&";
    //     const limit =
    //       limitCharNumber <= 1 || limitCharNumber > 100
    //         ? ""
    //         : "limit=" + limitCharNumber + "&";
    //     const response = await fetch(
    //       `https://gateway.marvel.com/v1/public/characters?${startWith}${limit}ts=${
    //         process.env.REACT_APP_MARVEL_TS
    //       }&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5(hash)}`
    //     );
    //     const responseData = await response.json();
    //     const loadedCharacters = [];
    //     if (
    //       responseData !== undefined &&
    //       responseData.data !== undefined &&
    //       responseData.data.results !== undefined
    //     ) {
    //       setErrorGettingCharacters(false);
    //       if (responseData.data.results.length !== 0) {
    //         setCharactersListEmpty(false);
    //         for (const key of responseData.data.results) {
    //           const character = {
    //             id: key.id,
    //             characterId: key.id,
    //             characterName: key.name,
    //             imgHref: key.name,
    //             imgUrl: key.thumbnail.path,
    //             description: key.description,
    //             modified: key.modified,
    //           };
    //           loadedCharacters.push(character);
    //         }
    //         dispatch(searchCharacterActions.setDoSearch(false));
    //       } else setCharactersListEmpty(true);
    //     } else {
    //       if (responseData.code === "RequestThrottled")
    //         setErrorMessage("Too many Api requests, try latter...");
    //       setErrorGettingCharacters(true);
    //     }
    //     dispatch(charactersActions.setCharactersList(loadedCharacters));
    //   }
    // };
    // fetchCharacters();
    // }, [performSearch]);
    // dispatch(fetchCharacters());
  }, [dispatch]);

  const characterListPopulated =
    !errorGettingCharacters && !charactersListEmpty;

  return (
    <Fragment>
      <div>
        <Search />
      </div>
      {characterListPopulated && (
        <Container>
          <Row>
            <Col>
              {characters.map((character) => (
                <Character
                  key={character.id}
                  characterId={character.characterId}
                  characterName={character.characterName}
                  imgHref={character.imgHref}
                  imgUrl={character.imgUrl}
                  description={character.description}
                  modified={character.modified}
                />
              ))}
            </Col>
          </Row>
        </Container>
      )}
      {errorGettingCharacters && (
        <div className={classes.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      )}
      {charactersListEmpty && (
        <div className={classes.errorMessage}>
          <p>List of characters is empty</p>
        </div>
      )}
    </Fragment>
  );
};

export default CharactersList;
