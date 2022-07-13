import React, { Fragment } from "react";

const CharacterDetails = (
  characterName,
  imgUrl,
  imgHref,
  dateModified,
  description
) => {
  return (
    <Fragment>
      <p>Hiiiiii</p>
      {/* <div>{characterName}</div>
      <a href={imgHref}>
        <img src={imgUrl} alt={characterName} width="600" height="400" />
      </a>
      <p>Date modified: {dateModified}</p>
      <p>{description}</p> */}
    </Fragment>
  );
};

export default CharacterDetails;
