import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div>
      <div className={classes.topnav}>
        <a className={classes.active} href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className={classes.search__container}>
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>

      <div style={{ padding: 16 + "px" }}>
        <h2>Marvel heroes</h2>
        <p>Search for favourite hero.</p>
        <p>Resize the browser window to see the responsive effect.</p>
      </div>
    </div>
  );
};

export default Search;
