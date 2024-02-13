import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import PreviewGameCard from "./PreviewGameCard";
import {
  sortAscendingByDate,
  sortGamesByStatus,
} from "../../../../../helpers/games";

export default function GamesList() {
  const { games } = useContext(GlobalContext);
  const gamesSortedByDate = sortAscendingByDate(games);
  const gameSortedByStatus = sortGamesByStatus(gamesSortedByDate);

  return (
    <ul className="list-games-container">
      {gameSortedByStatus.map((game) => (
        <PreviewGameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
