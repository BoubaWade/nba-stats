import { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import {
  getAllGamesFinishedByTeam,
  getAllGamesPoints,
  getGamesPointsAverageForTeam,
} from "../../../../../../helpers/games";
import Loader from "../../../../../reusable-ui/Loader/Loader";

export default function RightSide() {
  const { teamFullName, allGamesByTeam } = useContext(GlobalContext);

  const allGamesFinished = getAllGamesFinishedByTeam(allGamesByTeam);
  const allGamesPoints = getAllGamesPoints(allGamesFinished, teamFullName);
  const averagePoints = getGamesPointsAverageForTeam(allGamesPoints);

  if (!averagePoints) return <Loader />;
  return (
    <div className="right-side-team-stats-banner">
      <h3>Points par match</h3>
      <span>{averagePoints}</span>
    </div>
  );
}
