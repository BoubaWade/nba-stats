import { useContext } from "react";
import { getStatusResult } from "../../../../../../helpers/games";
import { Game } from "../../../../teamsTypes";
import { GlobalContext } from "../../../../../../contexts/globalContext";

type GameResultProps = {
  game: Game;
};

export default function GameResult({ game }: GameResultProps) {
  const { teamFullName } = useContext(GlobalContext);

  return (
    <td>
      <span>{getStatusResult(game, teamFullName)}</span>
      <span>
        {game.home_team.full_name === teamFullName
          ? game.visitor_team_score
          : game.home_team_score}
        -
        {game.visitor_team.full_name === teamFullName
          ? game.visitor_team_score
          : game.home_team_score}
      </span>
    </td>
  );
}
