import { useContext, useEffect } from "react";
import { getGamesSortedByDate } from "../../../../../helpers/games";
import { getSpecificTeamGames } from "../../../../../service/apiCall";
import GameCard from "./GameCard/GameCard";
import { GlobalContext } from "../../../../../contexts/globalContext";

export default function ListGameCard() {
  const {
    specificTeamGames,
    setSpecificTeamGames,
    specificTeamID,
    yearOfTheGames,
  } = useContext(GlobalContext);
  const gamesSortedByDate = getGamesSortedByDate(specificTeamGames);

  useEffect(() => {
    getSpecificTeamGames(
      specificTeamID,
      parseInt(yearOfTheGames),
      setSpecificTeamGames
    );
  }, [yearOfTheGames]);

  return (
    <ul className="list-games-cards">
      {gamesSortedByDate.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
