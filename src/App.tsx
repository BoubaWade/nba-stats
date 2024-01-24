import "./app.css";
import Players from "./components/Players/Players";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./components/Teams/Teams";
import Games from "./components/Games/Games";
import Stats from "./components/Stats/Stats";
import Season from "./components/Season/Season";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="players" Component={Players} />
        <Route path="/teams" Component={Teams} />
        <Route path="/games" Component={Games} />
        <Route path="/stats" Component={Stats} />
        <Route path="/season" Component={Season} />
      </Routes>
    </Router>
  );
}

export default App;
