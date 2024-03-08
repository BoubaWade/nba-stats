import { createContext } from "react";
import { PlayerStats, Team } from "../components/Players/playersTypes";
import { Game, Value } from "../components/Teams/teamsTypes";
import { ActiveButton } from "../config/globalTypes";

type GlobalContextType = {
  isActiveNavButton: ActiveButton;
  setIsActiveNavButton: React.Dispatch<React.SetStateAction<ActiveButton>>;
  playerStats: PlayerStats[];
  setPlayerStats: React.Dispatch<React.SetStateAction<PlayerStats[]>>;
  showSpecificPlayer: boolean;
  setShowSpecificPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  specificTeamGames: Game[];
  setSpecificTeamGames: React.Dispatch<React.SetStateAction<Game[]>>;
  specificTeamID: number;
  setSpecificTeamID: React.Dispatch<React.SetStateAction<number>>;
  yearOfTheGames: string;
  setYearOfTheGames: React.Dispatch<React.SetStateAction<string>>;
  showSpecificTeam: boolean;
  setShowSpecificTeam: React.Dispatch<React.SetStateAction<boolean>>;
  dateRangeForSpecificTeamGames: Value;
  setDateRangeForSpecificTeamGames: React.Dispatch<React.SetStateAction<Value>>;
  dateRangeForAllGames: Value;
  setDateRangeForAllGames: React.Dispatch<React.SetStateAction<Value>>;
  showSpecificTeamStats: boolean;
  setShowSpecificTeamStats: React.Dispatch<React.SetStateAction<boolean>>;
  showspecificTeamGames: boolean;
  setShowSpecificTeamGames: React.Dispatch<React.SetStateAction<boolean>>;
  teamFullName: string | null;
  setTeamFullName: React.Dispatch<React.SetStateAction<string | null>>;
  gameStats: PlayerStats[];
  setGameStats: React.Dispatch<React.SetStateAction<PlayerStats[]>>;
  showAllGames: boolean;
  setShowAllGames: React.Dispatch<React.SetStateAction<boolean>>;
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
  teamStatsDisplayed: boolean;
  setTeamStatsDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
  allGamesByTeam: Game[];
  setAllGamesByTeam: React.Dispatch<React.SetStateAction<Game[]>>;
  innerStatsTabsButtons: ActiveButton;
  setInnerStatsTabsButtons: React.Dispatch<React.SetStateAction<ActiveButton>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  isActiveNavButton: {},
  setIsActiveNavButton: () => {},
  playerStats: [],
  setPlayerStats: () => {},
  showSpecificPlayer: false,
  setShowSpecificPlayer: () => {},
  teams: [],
  setTeams: () => {},
  specificTeamGames: [],
  setSpecificTeamGames: () => {},
  specificTeamID: 0,
  setSpecificTeamID: () => {},
  yearOfTheGames: "",
  setYearOfTheGames: () => {},
  showSpecificTeam: false,
  setShowSpecificTeam: () => {},
  dateRangeForSpecificTeamGames: null,
  setDateRangeForSpecificTeamGames: () => {},
  dateRangeForAllGames: null,
  setDateRangeForAllGames: () => {},
  showSpecificTeamStats: false,
  setShowSpecificTeamStats: () => {},
  showspecificTeamGames: false,
  setShowSpecificTeamGames: () => {},
  teamFullName: "",
  setTeamFullName: () => {},
  gameStats: [],
  setGameStats: () => {},
  showAllGames: true,
  setShowAllGames: () => {},
  games: [],
  setGames: () => {},
  teamStatsDisplayed: false,
  setTeamStatsDisplayed: () => {},
  allGamesByTeam: [],
  setAllGamesByTeam: () => {},
  innerStatsTabsButtons: {},
  setInnerStatsTabsButtons: () => {},
});
