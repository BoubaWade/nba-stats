import { createContext } from "react";
import { PlayerStats, Team } from "../components/Players/playersTypes";
import { Game } from "../components/Teams/teamsTypes";

type GlobalContextType = {
  playerStats: PlayerStats[];
  setPlayerStats: React.Dispatch<React.SetStateAction<PlayerStats[]>>;
  showSpecificPlayer: boolean;
  setShowSpecificPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
  specificTeamID: number;
  setSpecificTeamID: React.Dispatch<React.SetStateAction<number>>;
  yearOfTheGames: string;
  setYearOfTheGames: React.Dispatch<React.SetStateAction<string>>;
  showSpecificTeam: boolean;
  setShowSpecificTeam: React.Dispatch<React.SetStateAction<boolean>>;
  teamFullName: string | null;
  setTeamFullName: React.Dispatch<React.SetStateAction<string | null>>;
  statsGame: PlayerStats[];
  setStatsGame: React.Dispatch<React.SetStateAction<PlayerStats[]>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  playerStats: [],
  setPlayerStats: () => {},
  showSpecificPlayer: false,
  setShowSpecificPlayer: () => {},
  teams: [],
  setTeams: () => {},
  games: [],
  setGames: () => {},
  specificTeamID: 0,
  setSpecificTeamID: () => {},
  yearOfTheGames: "",
  setYearOfTheGames: () => {},
  showSpecificTeam: false,
  setShowSpecificTeam: () => {},
  teamFullName: "",
  setTeamFullName: () => {},
  statsGame: [],
  setStatsGame: () => {},
});
