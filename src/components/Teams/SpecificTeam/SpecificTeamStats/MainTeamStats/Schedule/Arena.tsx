import { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import {
  getSpecificTeamArena,
  setTeamsWithArenas,
} from "../../../../../../helpers/teams";
import { nbaArenas } from "../../../../../../config/constants";
import { Game } from "../../../../teamsTypes";

type ArenaProps = {
  game: Game;
};

export default function Arena({ game }: ArenaProps) {
  const { teams } = useContext(GlobalContext);
  const teamsWithArenas = setTeamsWithArenas(teams, nbaArenas);

  return (
    <td>{getSpecificTeamArena(teamsWithArenas, game.home_team.name)?.arena}</td>
  );
}
