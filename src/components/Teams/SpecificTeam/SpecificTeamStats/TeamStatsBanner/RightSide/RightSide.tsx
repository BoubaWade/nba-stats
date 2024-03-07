import { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import {
  getAllGamesPoints,
  getGamesPointsAverageForTeam,
} from "../../../../../../helpers/games";
import { STATUS_AFTER_GAME } from "../../../../../../config/constants";

export default function RightSide() {
  const { teamFullName, allGamesByTeam } = useContext(GlobalContext);

  const allGamesFinished = allGamesByTeam.filter(
    (game) => game.status === STATUS_AFTER_GAME
  );
  const allGamesPoints = getAllGamesPoints(allGamesFinished, teamFullName);
  const averagePoints = getGamesPointsAverageForTeam(allGamesPoints);

  return (
    <div className="right-side-team-stats-banner">
      <h3>Points par match</h3>
      <span>{averagePoints.toString()}</span>
    </div>
  );
}
