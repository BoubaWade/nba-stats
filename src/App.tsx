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
import { PlayerStats, Team } from "./components/Players/playersTypes";
import { Game } from "./components/Teams/teamsTypes";

function App() {
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([]);
  const [showSpecificPlayer, setShowSpecificPlayer] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [specificTeamID, setSpecificTeamID] = useState(0);
  const [yearOfTheGames, setYearOfTheGames] = useState("2023");
  const [showSpecificTeam, setShowSpecificTeam] = useState(false);
  const [teamFullName, setTeamFullName] = useState<string | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [statsGame, setStatsGame] = useState<PlayerStats[]>([]);

  const globalContextValue = {
    playerStats,
    setPlayerStats,
    showSpecificPlayer,
    setShowSpecificPlayer,
    teams,
    setTeams,
    specificTeamID,
    setSpecificTeamID,
    yearOfTheGames,
    setYearOfTheGames,
    showSpecificTeam,
    setShowSpecificTeam,
    teamFullName,
    setTeamFullName,
    games,
    setGames,
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
