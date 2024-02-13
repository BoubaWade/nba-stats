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

  useEffect(() => {
    if (dateRangeForSpecificTeamGames) {
      let value = dateRangeForSpecificTeamGames;
      const startDate = formatDate(
        Array.isArray(value) ? value[0] ?? new Date() : value
      );
      const endDate = formatDate(
        Array.isArray(value) ? value[1] ?? new Date() : value
      );

      const searchParams = {
        teamId: specificTeamID,
        startDate: startDate,
        endDate: endDate,
      };

      getSpecificTeamGames(searchParams, setSpecificTeamGames);
    }
  }, [dateRangeForSpecificTeamGames]);

  return (
    <ul className="list-games-cards">
      {gamesSortedByDate.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
