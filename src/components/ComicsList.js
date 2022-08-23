import React from "react";
import { Fragment } from "react";
import { Row, Col, Container } from "reactstrap";
import Comic from "./Comic";
import SearchComics from "./SearchComics";
import { useSelector } from "react-redux";

const ComicsList = () => {
  const searchString = useSelector((state) => state.searchComic).searchString;
  const comics = useSelector((state) => state.comic).comicsList;

  return (
    <Fragment>
      <div>
        <SearchComics />
      </div>

      <Container>
        <Row>
          <Col>
            {comics.map(
              (comicInfo) =>
                comicInfo.title.toLowerCase().includes(searchString) > 0 && (
                  <Comic
                    key={comicInfo.key}
                    title={comicInfo.title}
                    description={comicInfo.description}
                    imgHref={comicInfo.imgHref}
                    imgUrl={comicInfo.imgUrl}
                  />
                )
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ComicsList;
