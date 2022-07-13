import classes from "./Character.module.css";

const Character = ({ imgHref, imgUrl, characterName }) => {
  return (
    <div className={classes.gallery}>
      <a href={imgHref}>
        <img src={imgUrl} alt={characterName} width="600" height="400" />
      </a>
      <div className={classes.desc}>{characterName}</div>
      <button className="btn btn-primary btn-block">Details</button>
      <button className="btn btn-info btn-block">Comics</button>
    </div>
  );
};

export default Character;
