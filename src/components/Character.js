import classes from "./Character.module.css";
import { Link } from "react-router-dom";

const Character = ({
  characterId,
  imgHref,
  imgUrl,
  characterName,
  description,
  modified,
}) => {
  return (
    <div className={classes.gallery}>
      <a href={imgHref}>
        <img src={imgUrl + "/portrait_medium.jpg"} alt={characterName} />
      </a>
      <div className={classes.desc}>{characterName}</div>
      <Link
        to={{
          pathname: `characters/${characterName}/details`,
          state: {
            imgHref: imgHref,
            imgUrl: imgUrl,
            characterName: characterName,
            description: description,
            modified: modified,
          },
        }}
      >
        <button className="btn btn-primary btn-block">Details</button>
      </Link>
      <Link
        to={{
          pathname: `characters/${characterName}/comics`,
          state: {
            characterId: characterId,
          },
        }}
      >
        <button className="btn btn-info btn-block">Comics</button>
      </Link>
    </div>
  );
};

export default Character;
