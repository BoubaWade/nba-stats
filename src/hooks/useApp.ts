import { useState } from "react";
import { PlayerStats, Team } from "../components/Players/playersTypes";
import { Game, Value } from "../components/Teams/teamsTypes";
import {
  oneWeekAfter,
  oneWeekBefore,
  today,
  yesterday,
} from "../config/constants";
import { ActiveButton } from "../config/globalTypes";

export default function useApp() {
  const [isActiveNavButton, setIsActiveNavButton] = useState<ActiveButton>({
    isPlayersNavButton: false,
    isTeamsNavButton: true,
    isGamesNavButton: false,
    isStatsNavButton: false,
    isSeasonNavButton: false,
  });
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([]);
  const [showSpecificPlayer, setShowSpecificPlayer] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [specificTeamID, setSpecificTeamID] = useState(0);
  const [yearOfTheGames, setYearOfTheGames] = useState("2023");
  const [showSpecificTeam, setShowSpecificTeam] = useState(false);
  const [teamFullName, setTeamFullName] = useState<string | null>(null);
  const [specificTeamGames, setSpecificTeamGames] = useState<Game[]>([]);
  const [showSpecificTeamStats, setShowSpecificTeamStats] = useState(false);
  const [showspecificTeamGames, setShowSpecificTeamGames] = useState(false);
  const [dateRangeForSpecificTeamGames, setDateRangeForSpecificTeamGames] =
    useState<Value>([oneWeekBefore, oneWeekAfter]);
  const [dateRangeForAllGames, setDateRangeForAllGames] = useState<Value>([
    yesterday,
    today,
  ]);
  const [gameStats, setGameStats] = useState<PlayerStats[]>([]);
  const [showAllGames, setShowAllGames] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [teamStatsDisplayed, setTeamStatsDisplayed] = useState(false);
  const [allGamesByTeam, setAllGamesByTeam] = useState<Game[]>([]);
  const [innerStatsTabsButtons, setInnerStatsTabsButtons] =
    useState<ActiveButton>({
      isRosterActive: true,
      isStatsActive: false,
      isScheduleActive: false,
    });

  const globalContextValue = {
    isActiveNavButton,
    setIsActiveNavButton,
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
    showSpecificTeamStats,
    setShowSpecificTeamStats,
    showspecificTeamGames,
    setShowSpecificTeamGames,
    dateRangeForSpecificTeamGames,
    setDateRangeForSpecificTeamGames,
    dateRangeForAllGames,
    setDateRangeForAllGames,
    gameStats,
    setGameStats,
    showAllGames,
    setShowAllGames,
    games,
    setGames,
    teamStatsDisplayed,
    setTeamStatsDisplayed,
    allGamesByTeam,
    setAllGamesByTeam,
    innerStatsTabsButtons,
    setInnerStatsTabsButtons,
  };

  return { globalContextValue };
}
