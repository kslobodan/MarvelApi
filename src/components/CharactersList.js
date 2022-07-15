import { Fragment, useEffect, useState } from "react";
import Character from "./Character";
import Search from "./Search";
import { Row, Col, Container } from "reactstrap";
import classes from "./CharactersList.module.css";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [startsWith, setStartsWith] = useState("");
  const [limitCharNumber, setLimitCharacterNumber] = useState(0);
  const [errorGettingCharacters, setErrorGettingCharacters] = useState(false);
  const [charactersListEmpty, setCharactersListEmpty] = useState(false);

  const handleSetStartsWithValue = (value) => {
    setStartsWith(value);
  };

  const handleSetLimitCharacterNumber = (value) => {
    setLimitCharacterNumber(value);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const hash =
        process.env.REACT_APP_MARVEL_TS +
        process.env.REACT_APP_MARVEL_PRIVATE_KEY +
        process.env.REACT_APP_MARVEL_PUBLIC_KEY;

      var md5 = require("md5");

      const startWith =
        startsWith === "" ? "" : "nameStartsWith=" + startsWith + "&";

      const limit =
        limitCharNumber <= 1 || limitCharNumber > 100
          ? ""
          : "limit=" + limitCharNumber + "&";

      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?${startWith}${limit}ts=${
          process.env.REACT_APP_MARVEL_TS
        }&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5(hash)}`
      );
      const responseData = await response.json();

      const loadedCharacters = [];

      if (
        responseData !== undefined &&
        responseData.data !== undefined &&
        responseData.data.results !== undefined
      ) {
        setErrorGettingCharacters(false);

        if (responseData.data.results.length !== 0) {
          setCharactersListEmpty(false);
          for (const key of responseData.data.results) {
            const character = {
              id: key.id,
              characterId: key.id,
              characterName: key.name,
              imgHref: key.name,
              imgUrl: key.thumbnail.path,
              description: key.description,
              modified: key.modified,
              comics: key.comics,
            };
            loadedCharacters.push(character);
          }
        } else setCharactersListEmpty(true);
      } else setErrorGettingCharacters(true);

      setCharacters(loadedCharacters);
    };

    fetchCharacters();
  }, [startsWith, limitCharNumber]);

  const characterListPopulated =
    !errorGettingCharacters && !charactersListEmpty;

  return (
    <Fragment>
      <div>
        <Search
          setStartsWithValue={handleSetStartsWithValue}
          setLimitCharacterNumberValue={handleSetLimitCharacterNumber}
        />
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
                  comics={character.comics}
                />
              ))}
            </Col>
          </Row>
        </Container>
      )}
      {errorGettingCharacters && (
        <div className={classes.errorMessage}>
          <p>Error getting characters</p>
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
