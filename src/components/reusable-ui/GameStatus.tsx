import { getGameStatus } from "../../helpers/games";

type GameStatusProps = {
  status: string;
  time: string;
};
export default function GameStatus({ status, time }: GameStatusProps) {
  const gameStatus = getGameStatus(status);
  const timeFormated = time.slice(2);

  if (time === "Half") return "Mi-temps";
  return (
    <div className="game-status">
      <p>En cours...</p>
      {gameStatus && <p>{gameStatus}</p>}
      <p>{time !== "Half" && timeFormated + " min"}</p>
    </div>
  );
}
