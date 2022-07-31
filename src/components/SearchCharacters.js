import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEraser } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchCharacters.module.css";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCharacterActions } from "../store/searchCharacterSlice";

const SearchCharacters = () => {
  const dispatch = useDispatch();
  const startWithCharacters = useSelector(
    (state) => state.searchCharacter
  ).characterNameStartsWith;

  const limitCharacterNumber = useSelector(
    (state) => state.searchCharacter
  ).limitCharacterNumber;

  const min = 1;
  const max = 100;

  const handleLimitChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    dispatch(searchCharacterActions.setLimitCharacterNumber(value));
  };

  const handleStartsWith = (event) => {
    dispatch(
      searchCharacterActions.setCharacterNameStartsWith(event.target.value)
    );
  };

  return (
    <Fragment>
      <div className={classes.topnav}>
        <a
          className={classes.active}
          onClick={(e) => {
            e.preventDefault();
            dispatch(searchCharacterActions.clearSearchParameters());
          }}
        >
          Home
        </a>
        <div className={classes.search__container}>
          <form>
            <div>
              <input
                type="text"
                placeholder="Starts with..."
                name="startWith"
                value={startWithCharacters}
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

              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(searchCharacterActions.setDoSearch(true));
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(searchCharacterActions.clearSearchParameters());
                }}
              >
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
    </Fragment>
  );
};

export default SearchCharacters;
