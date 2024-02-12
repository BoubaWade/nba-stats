import { useContext, useEffect } from "react";
import { formatDate, sortDescendingByDate } from "../../../../../helpers/games";
import { getSpecificTeamGames } from "../../../../../service/apiCall";
import GameCard from "./GameCard/GameCard";
import { GlobalContext } from "../../../../../contexts/globalContext";

export default function ListGameCard() {
  const {
    specificTeamGames,
    setSpecificTeamGames,
    specificTeamID,
    dateRangeForSpecificTeamGames,
  } = useContext(GlobalContext);
  const gamesSortedByDate = sortDescendingByDate(specificTeamGames);

  const startDate = formatDate(dateRangeForSpecificTeamGames[0]);
  const endDate = formatDate(dateRangeForSpecificTeamGames[1]);

  const searchParams = {
    teamId: specificTeamID,
    startDate: startDate,
    endDate: endDate,
  };
  useEffect(() => {
    getSpecificTeamGames(searchParams, setSpecificTeamGames);
  }, [dateRangeForSpecificTeamGames]);

  return (
    <ul className="list-games-cards">
      {gamesSortedByDate.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
