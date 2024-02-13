import { getGameStatus } from "../../../../../helpers/games";

type GameStatusProps = {
  status: string;
};
export default function GameStatus({ status }: GameStatusProps) {
  const gameStatus = getGameStatus(status);

  return (
    <div className="game-status">
      <p>En cours...</p>
      {gameStatus && <p>{gameStatus}</p>}
    </div>
  );
}
