import PreviewGameCard from "./PreviewGameCard";
import { Game } from "../../../../Teams/teamsTypes";
// import { sortGamesByStatus } from "../../../../../helpers/games";
type GamesListProps = {
  gamesToDisplay: Game[];
};

export default function GamesList({ gamesToDisplay }: GamesListProps) {
  return (
    <ul className="list-games-container">
      {gamesToDisplay.map((game) => (
        <PreviewGameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
