import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import {
  getStatIfTheyPlay,
  getStatsSortedByPoints,
  getStatsSortedByTeam,
} from "../../../../../helpers/players";
import StatsTableBodyRow from "./StatsTableBodyRow";

export default function StatsTableBody() {
  const { gameStats } = useContext(GlobalContext);

  const statsToDisplay = getStatIfTheyPlay(gameStats);
  const statsSortedByPoints = getStatsSortedByPoints(statsToDisplay);
  const statsSortedByTeam = getStatsSortedByTeam(statsSortedByPoints);

  return (
    <tbody>
      {statsSortedByTeam.map((stats) => (
        <StatsTableBodyRow stats={stats} />
      ))}
    </tbody>
  );
}
