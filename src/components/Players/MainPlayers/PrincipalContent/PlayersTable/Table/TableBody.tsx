import { useContext } from "react";
import { PlayersContext } from "../../../../../../contexts/playersContext";
import TableRow from "./TableRow";

export default function TableBody() {
  const { players, rangeValue } = useContext(PlayersContext);
  const playersLength = players.length;
  const proportion = (playersLength * parseInt(rangeValue)) / 100;
  const sliceDataPlayers = players.slice(0, proportion);

  return (
    <tbody>
      {sliceDataPlayers.map((player) => (
        <TableRow key={player.id} player={player} />
      ))}
    </tbody>
  );
}
