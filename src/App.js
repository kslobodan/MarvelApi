import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CharactersList from "./components/CharactersList";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <div>
      <Route path="/characters">
        <CharactersList />
      </Route>
      <Route path="/characters/:characterId">
        <CharacterDetails />
      </Route>
    </div>
  );
}

export default App;
