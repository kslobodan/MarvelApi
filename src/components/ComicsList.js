import React from "react";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const characterId = useLocation().state.characterId;

  useEffect(() => {
    const fetchComics = async () => {
      const hash =
        process.env.REACT_APP_MARVEL_TS +
        process.env.REACT_APP_MARVEL_PRIVATE_KEY +
        process.env.REACT_APP_MARVEL_PUBLIC_KEY;

      var md5 = require("md5");

      const characterIdNumber =
        characterId === "" ? "" : "characters=" + characterId + "&";

      const response = await fetch(
        `https://gateway.marvel.com/v1/public/comics?${characterIdNumber}ts=${
          process.env.REACT_APP_MARVEL_TS
        }&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5(hash)}`
      );
      const responseData = await response.json();

      const loadedComics = [];

      for (const key of responseData.data.results) {
        const comic = {
          id: key.id,
          title: key.title,
          // imgHref: key.name,
          // imgUrl: key.thumbnail.path,
          description: key.description,
          modified: key.modified,
        };
        loadedComics.push(comic);
      }

      setComics(loadedComics);
    };

    fetchComics();
  }, [characterId]);

  return (
    <Fragment>
      <div>Comics list</div>
      <Container>
        <Row>
          <Col>
            {comics.map((comic) => (
              <ComicsList
                id={comic.id}
                title={comic.title}
                description={comic.description}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ComicsList;
