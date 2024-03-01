import { Player } from "../../../../playersTypes";
import TeamInfos from "./TeamInfos";
import PlayerInfos from "./PlayerInfos";
type TableRowPlayerProps = {
  player: Player;
};

export default function TableRowPlayer({ player }: TableRowPlayerProps) {
  return (
    <tr>
      <PlayerInfos player={player} />
      <TeamInfos team={player.team} />
    </tr>
  );
}
