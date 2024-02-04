import { useContext, useEffect } from "react";
import { getGamesSortedByDate } from "../../../../../helpers/games";
import { getGames } from "../../../../../service/apiCall";
import GameCard from "./GameCard/GameCard";
import { GlobalContext } from "../../../../../contexts/globalContext";

export default function ListGameCard() {
  const { games, setGames, specificTeamID, yearOfTheGames } =
    useContext(GlobalContext);
  const gamesSortedByDate = getGamesSortedByDate(games);

  useEffect(() => {
    getGames(specificTeamID, parseInt(yearOfTheGames), setGames);
  }, [yearOfTheGames]);

  return (
    <ul className="list-games-cards">
      {gamesSortedByDate.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
