import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import GameListItem from "./GameListItem";

export default function GamesList() {
  const { games } = useContext(GlobalContext);

  return (
    <ul className="list-games-container">
      {games.map((game) => (
        <GameListItem key={game.id} game={game} />
      ))}
    </ul>
  );
}
