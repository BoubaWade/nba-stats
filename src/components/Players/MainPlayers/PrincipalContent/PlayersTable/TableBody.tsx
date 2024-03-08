import { useContext } from "react";
import { PlayersContext } from "../../../../../contexts/playersContext";
import TableRowPlayer from "./TableRowPlayer/TableRowPlayer";

export default function TableBody() {
  const { players, rangeValue } = useContext(PlayersContext);
  const playersLength = players.length;
  const proportion = (playersLength * rangeValue) / 100;
  const sliceDataPlayers = players.slice(0, proportion);

  return (
    <tbody>
      {sliceDataPlayers.map((data) => (
        <TableRowPlayer key={data.id} player={data} />
      ))}
    </tbody>
  );
}
