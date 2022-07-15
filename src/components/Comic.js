import React from "react";
import classes from "./Comic.module.css";

const Comic = (title, imgHref, imgUrl, description) => {
  return (
    <div className={classes.gallery}>
      {/* <a href={imgHref}>
        <img src={imgUrl + "/portrait_medium.jpg"} alt={characterName} />
      </a> */}
      <div className={classes.desc}>{title}</div>
    </div>
  );
};

export default Comic;
