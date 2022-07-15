import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import classes from "./CharacterDetails.module.css";
import { Link } from "react-router-dom";

const CharacterDetails = () => {
  const params = useLocation().state;

  const dadeModified = params.modified.substring(
    0,
    params.modified.indexOf("T")
  );

  return (
    <Container>
      <div className={classes.top}></div>
      <div className={classes.title}>{params.characterName}</div>
      <div className={classes.img}>
        <a href={params.imgHref}>
          <img
            src={params.imgUrl + "/portrait_xlarge.jpg"}
            alt={params.characterName}
          />
        </a>
      </div>
      <div className={classes.modified}>
        <p>Date modified: {dadeModified}</p>
      </div>
      <div className={classes.desc}>
        <p>{params.description}</p>
      </div>
      <div className="row">
        <div className="col text-center">
          <Link to="/characters">
            <button className="btn btn-primary"> Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CharacterDetails;
