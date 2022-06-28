import classes from "./Character.module.css";

const Character = (props) => {
  return (
    <div className={classes.gallery}>
      <a href={props.imgHref}>
        <img
          src={props.imgUrl}
          alt={props.characterName}
          width="600"
          height="400"
        />
      </a>
      <div className={classes.desc}>{props.characterName}</div>
    </div>
  );
};

export default Character;
