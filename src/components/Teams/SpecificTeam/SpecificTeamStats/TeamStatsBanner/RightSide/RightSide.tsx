import { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import {
  getAllGamesFinishedByTeam,
  getAllGamesPoints,
  getGamesPointsAverageForTeam,
} from "../../../../../../helpers/games";

export default function RightSide() {
  const { teamFullName, allGamesByTeam } = useContext(GlobalContext);

  const allGamesFinished = getAllGamesFinishedByTeam(allGamesByTeam);
  const allGamesPoints = getAllGamesPoints(allGamesFinished, teamFullName);
  const averagePoints = getGamesPointsAverageForTeam(allGamesPoints);

  return (
    <div className="right-side-team-stats-banner">
      <h3>Points par match</h3>
      <span>{averagePoints}</span>
    </div>
  );
}
