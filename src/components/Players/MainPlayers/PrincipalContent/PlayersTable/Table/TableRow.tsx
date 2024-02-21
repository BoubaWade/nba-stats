import { Player } from "../../../../playersTypes";
import TeamInfos from "./TeamInfos";
import PlayerInfos from "./PlayerInfos";
type TableRowProps = {
  player: Player;
};

export default function TableRow({ player }: TableRowProps) {
  return (
    <tr>
      <PlayerInfos player={player} />
      <TeamInfos team={player.team} />
    </tr>
  );
}
