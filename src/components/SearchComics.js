import classes from "./SearchComics.module.css";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchComicActions } from "../store/searchComicSlice";
import { NavLink } from "react-router-dom";

const SearchComics = (props) => {
  const dispatch = useDispatch();

  const searchString = useSelector((state) => state.searchComic).searchString;

  const handlerChangeSearchString = (event) => {
    dispatch(searchComicActions.setSearchString(event.target.value));
  };

  return (
    <Fragment>
      <div className={classes.topnav}>
        <div className={classes.Link}>
          <Link to="/characters">
            <a className={classes.active}>Home</a>
          </Link>
        </div>

        <div className={classes.search__container}>
          <form>
            <div>
              <input
                type="text"
                placeholder="Starts with..."
                name="startWith"
                value={searchString}
                style={{ width: 150 + "px", margin: 10 + "px" }}
                onChange={handlerChangeSearchString}
              />

              <label style={{ marginLeft: 50 + "px" }}>
                <h2>Search for favourite comic.</h2>
              </label>
            </div>
          </form>
        </div>
      </div>

      <div style={{ padding: 16 + "px" }}>
        <h3>Marvel comics</h3>
      </div>
    </Fragment>
  );
};

export default SearchComics;
