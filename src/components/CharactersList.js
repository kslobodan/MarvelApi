import { Fragment, useEffect, useState } from "react";
import Character from "./Character";
import Search from "./Search";
import { Row, Col, Container } from "reactstrap";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [startsWith, setStartsWith] = useState("");
  const [limitCharNumber, setLimitCharacterNumber] = useState(0);

  const handleSetStartsWithValue = (value) => {
    setStartsWith(value);
  };

  const handleSetLimitCharacterNumber = (value) => {
    setLimitCharacterNumber(value);
  };

  useEffect(() => {
    console.log("starts with in use effect:" + startsWith);
    const fetchCharacters = async () => {
      console.log("test");
      const hash =
        process.env.REACT_APP_MARVEL_TS +
        process.env.REACT_APP_MARVEL_PRIVATE_KEY +
        process.env.REACT_APP_MARVEL_PUBLIC_KEY;

      var md5 = require("md5");
      console.log(md5(hash));

      const startWith =
        startsWith === "" ? "" : "nameStartsWith=" + startsWith + "&";
      console.log("Starts with: " + startWith);

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

      for (const key of responseData.data.results) {
        const character = {
          id: key.id,
          characterName: key.name,
          imgHref: key.name,
          imgUrl: key.thumbnail.path + "/portrait_medium.jpg",
        };
        loadedCharacters.push(character);
      }

      setCharacters(loadedCharacters);
    };

    fetchCharacters();
  }, [startsWith, limitCharNumber]);

  return (
    <Fragment>
      <div>
        <Search
          setStartsWithValue={handleSetStartsWithValue}
          setLimitCharacterNumberValue={setLimitCharacterNumber}
        />
      </div>
      <Container>
        <Row>
          <Col>
            {characters.map((character) => (
              <Character
                key={character.id}
                characterName={character.characterName}
                imgHref={character.imgHref}
                imgUrl={character.imgUrl}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CharactersList;
