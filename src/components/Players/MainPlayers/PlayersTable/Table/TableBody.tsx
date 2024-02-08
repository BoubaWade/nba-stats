import { useContext } from "react";
import { PlayersContext } from "../../../../../contexts/playersContext";
import TableRow from "./TableRow";

export default function TableBody() {
  const { dataPlayers, rangeValue } = useContext(PlayersContext);
  const playersLength = dataPlayers.length;
  const proportion = (playersLength * parseInt(rangeValue)) / 100;
  const sliceDataPlayers = dataPlayers.slice(0, proportion);

  return (
    <tbody>
      {sliceDataPlayers.map((player) => (
        <TableRow key={player.id} player={player} />
      ))}
    </tbody>
  );
}
