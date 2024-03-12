import GameResult from "./GameResult";
import OpponentTeam from "./OpponentTeam";
import Arena from "./Arena";
import { Game } from "../../../../teamsTypes";
import GameDate from "./GameDate";

type ScheduleTableRowProps = {
  game: Game;
};

export default function ScheduleTableRow({ game }: ScheduleTableRowProps) {
  return (
    <tr key={game.id}>
      <GameDate game={game} />
      <OpponentTeam game={game} />
      <GameResult game={game} />
      <Arena game={game} />
    </tr>
  );
}
