import classes from "./Characters.module.css";
import Search from "./Search";

const Characters = () => {
  return (
    <div>
      <div>
        <Search />
      </div>

      <div className={classes.gallery}>
        <a href="img_5terre.jpg">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
            alt="Character 1"
            width="600"
            height="400"
          />
        </a>
        <div className={classes.desc}>Character 1</div>
      </div>

      <div className={classes.gallery}>
        <a href="img_5terre.jpg">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
            alt="Character 2"
            width="600"
            height="400"
          />
        </a>
        <div className={classes.desc}>Character 2</div>
      </div>

      <div className={classes.gallery}>
        <a href="img_5terre.jpg">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
            alt="Character 3"
            width="600"
            height="400"
          />
        </a>
        <div className={classes.desc}>Character 3</div>
      </div>
    </div>
  );
};

export default Characters;
