import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEraser } from "@fortawesome/free-solid-svg-icons";
import classes from "./Search.module.css";
import { useState } from "react";

const Search = (props) => {
  const [startsWith, setStartsWith] = useState("");

  const min = 1;
  const max = 100;

  const [limitCharacterNumber, setLimitCharacterNumber] = useState(1);

  const handleLimitChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setLimitCharacterNumber(value);
  };

  const handleStartsWith = (event) => {
    setStartsWith(event.target.value);
  };

  const handleClearData = (event) => {
    event.preventDefault();
    setStartsWith("");
    setLimitCharacterNumber(1);
  };

  return (
    <div>
      <div className={classes.topnav}>
        <a className={classes.active} href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className={classes.search__container}>
          <form>
            <div>
              <input
                type="text"
                placeholder="Starts with..."
                name="startsWith"
                value={startsWith}
                style={{ width: 150 + "px", margin: 10 + "px" }}
                onChange={handleStartsWith}
              />
              <label>Limit</label>
              <input
                type="number"
                placeholder="Limit number..."
                name="limitNumber"
                value={limitCharacterNumber}
                onChange={handleLimitChange}
                style={{ width: 150 + "px", margin: 10 + "px" }}
              />
              {/* <SelectOption /> */}
              {/* <button type="submit" onClick={props.fetchCharacters}> */}
              <button
                type="submit"
                onClick={() => {
                  props.setStartsWithValue(startsWith);
                  props.setLimitCharacterNumberValue(limitCharacterNumber);
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>

              <button onClick={handleClearData}>
                <FontAwesomeIcon icon={faEraser} />
              </button>

              <label style={{ marginLeft: 50 + "px" }}>
                <h2>Search for favourite hero.</h2>
              </label>
            </div>
          </form>
        </div>
      </div>

      <div style={{ padding: 16 + "px" }}>
        <h3>Marvel heroes</h3>
      </div>
    </div>
  );
};

export default Search;
