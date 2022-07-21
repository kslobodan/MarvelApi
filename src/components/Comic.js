import classes from "./Comic.module.css";

const Comic = (props) => {
  console.log("props: " + props.title);
  console.log("desc: " + props.desc);

  return (
    <div className={classes.gallery}>
      <div className={classes.title}>{props.title}</div>
      <a href={props.imgHref}>
        <img src={props.imgUrl + "/portrait_medium.jpg"} alt={props.title} />
      </a>
      <div className={classes.desc}>{props.desc}</div>
    </div>
  );
};

export default Comic;
