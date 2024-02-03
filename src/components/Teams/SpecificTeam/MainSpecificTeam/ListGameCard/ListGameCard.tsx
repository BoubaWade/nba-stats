import { useContext, useEffect, useState } from "react";
import { TeamsContext } from "../../../../../contexts/teamsContext";
import { getGamesSortedByDate } from "../../../../../helpers/games";
import { getGames } from "../../../../../service/apiCall";
import { Game } from "../../../teamsTypes";
import GameCard from "./GameCard/GameCard";

export default function ListGameCard() {
  const { specificTeamID, yearOfTheGames } = useContext(TeamsContext);
  const [games, setGames] = useState<Game[]>([]);
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
