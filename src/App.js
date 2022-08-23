import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import CharactersList from "./components/CharactersList";
import CharacterDetails from "./components/CharacterDetails";
import ComicsList from "./components/ComicsList";
import { fetchCharacters, fetchComics } from "./store/actions";

function App() {
  const characterNameStartsWith = useSelector(
    (state) => state.searchCharacter
  ).characterNameStartsWith;

  const limitCharNumber = useSelector(
    (state) => state.searchCharacter
  ).limitCharacterNumber;

  const characterId = useSelector((state) => state.comic).characterId;

  const performSearch = useSelector((state) => state.searchCharacter).doSearch;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(characterNameStartsWith, limitCharNumber));
  }, [performSearch, dispatch]);

  useEffect(() => {
    if (characterId > 0) dispatch(fetchComics(characterId));
  }, [characterId, dispatch]);

  return (
    <div>
      <Route path="/">
        <Redirect to="/characters" />
      </Route>
      <Route path="/characters" exact>
        <CharactersList />
      </Route>
      <Route path="/characters/:characterName/comics">
        <ComicsList />
      </Route>
      <Route path="/characters/:characterName/details">
        <CharacterDetails />
      </Route>
    </div>
  );
}

export default App;
