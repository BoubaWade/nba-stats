import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import PreviewGameCard from "./PreviewGameCard";

export default function GamesList() {
  const { games } = useContext(GlobalContext);

  return (
    <ul className="list-games-container">
      {games.map((game) => (
        <PreviewGameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
