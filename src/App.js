import { Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CharactersList from "./components/CharactersList";
import CharacterDetails from "./components/CharacterDetails";
import ComicsList from "./components/ComicsList";

function App() {
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
