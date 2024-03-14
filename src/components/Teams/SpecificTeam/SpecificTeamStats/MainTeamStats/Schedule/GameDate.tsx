import { getDateFormated } from "../../../../../../helpers/games";
import { Game } from "../../../../teamsTypes";
type GameDateProps = {
  game: Game;
};

export default function GameDate({ game }: GameDateProps) {
  return <td>{getDateFormated(game.date)}</td>;
}
