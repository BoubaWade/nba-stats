import { useState } from "react";
import { PlayerStats, Team } from "../components/Players/playersTypes";
import { Game } from "../components/Teams/teamsTypes";

export default function useApp() {
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([]);
  const [showSpecificPlayer, setShowSpecificPlayer] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [specificTeamID, setSpecificTeamID] = useState(0);
  const [yearOfTheGames, setYearOfTheGames] = useState("2023");
  const [showSpecificTeam, setShowSpecificTeam] = useState(false);
  const [teamFullName, setTeamFullName] = useState<string | null>(null);
  const [specificTeamGames, setSpecificTeamGames] = useState<Game[]>([]);
  const [gameStats, setGameStats] = useState<PlayerStats[]>([]);
  const [showAllGames, setShowAllGames] = useState(true);
  const [games, setGames] = useState<Game[]>([]);

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
    specificTeamGames,
    setSpecificTeamGames,
    gameStats,
    setGameStats,
    showAllGames,
    setShowAllGames,
    games,
    setGames,
  };

  return { globalContextValue };
}
