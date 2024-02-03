import "./app.css";
import Players from "./components/Players/Players";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./components/Teams/Teams";
import Games from "./components/Games/Games";
import Stats from "./components/Stats/Stats";
import Season from "./components/Season/Season";
import Home from "./components/Home/Home";
import { GlobalContext } from "./contexts/globalContext";
import { useState } from "react";
import { PlayerStats } from "./components/Players/playersTypes";

function App() {
  // const [gameId, setGameId] = useState<number>();
  const [statsGame, setStatsGame] = useState<PlayerStats[]>([]);

  const globalContextValue = {
    // gameId,
    // setGameId,
    statsGame,
    setStatsGame,
  };
  return (
    <GlobalContext.Provider value={globalContextValue}>
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
    </GlobalContext.Provider>
  );
}

export default App;
