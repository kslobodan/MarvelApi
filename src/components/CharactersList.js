import { useEffect, useState } from "react";
import Character from "./Character";
import Search from "./Search";
import { Row, Col, Container } from "reactstrap";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [startsWith, setStartsWith] = useState("a");
  const [limitCharNumber, setLimitCharacterNumber] = useState(0);

  const handleSetStartsWithValue = (value) => {
    // alert(value);
    console.log("value: " + value);
    setStartsWith(value);
    console.log("startsWith: ", startsWith);
    alert(startsWith);
  };

  useEffect(() => {
    // console.log("starts with:" + startsWith);
    // alert(startsWith);
    const fetchCharacters = async () => {
      console.log("test");
      const hash =
        process.env.REACT_APP_MARVEL_TS +
        process.env.REACT_APP_MARVEL_PRIVATE_KEY +
        process.env.REACT_APP_MARVEL_PUBLIC_KEY;

      var md5 = require("md5");
      console.log(md5(hash));
      //bf0fa7351d69ecb594529f85a1a9f49f

      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=${
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
  }, []);

  return (
    <div>
      <div>
        <Search
          setStartsWithValue={handleSetStartsWithValue}
          setLimitCharacterNumberValue={setLimitCharacterNumber}
        />
      </div>
      <Container>
        <Row>
          <Col>
            {characters.map((ch) => (
              <Character
                key={ch.characterName}
                characterName={ch.characterName}
                imgHref={ch.imgHref}
                imgUrl={ch.imgUrl}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CharactersList;
