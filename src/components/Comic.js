import classes from "./Comic.module.css";

const Comic = ({ imgHref, imgUrl, title, description }) => {
  return (
    <div className={classes.gallery}>
      <div className={classes.title}>{title}</div>
      <a href={imgHref}>
        <img src={imgUrl + "/portrait_medium.jpg"} alt={title} />
      </a>
      {/* <div className={classes.desc}>{description}</div> */}
    </div>
  );
};

export default Comic;
