import { Fragment } from "react";
import Character from "./Character";
import Search from "./SearchCharacters";
import { Row, Col, Container } from "reactstrap";
import classes from "./CharactersList.module.css";
import { useSelector } from "react-redux";

const CharactersList = () => {
  const notification = useSelector((state) => state.character).notification;
  const characters = useSelector((state) => state.character).charactersList;

  const errorGettingCharacters =
    notification !== null &&
    notification.status !== null &&
    notification.status === "error";

  const charactersListEmpty =
    notification !== null &&
    notification.status !== null &&
    notification.status === "empty";

  const errorMessage =
    notification !== null && notification.message !== null
      ? notification.message
      : "";

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
                  comics={character.comics}
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
