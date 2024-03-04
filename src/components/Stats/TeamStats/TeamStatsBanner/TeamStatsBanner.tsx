import "./teamStatsBanner.css";
import PrimaryButton from "../../../reusable-ui/PrimaryButton/PrimaryButton";
import {
  getAllGamesPoints,
  getAllWinnedGames,
  getGamesPointsAverageForTeam,
} from "../../../../helpers/games";
import { STATUS_AFTER_GAME } from "../../../../config/constants";
import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";

export default function TeamStatsBanner() {
  const { teamFullName, allGamesByTeam, teams } = useContext(GlobalContext);
  const allGamesFinished = allGamesByTeam.filter(
    (game) => game.status === STATUS_AFTER_GAME
  );
  const gamesWinned = getAllWinnedGames(allGamesFinished, teamFullName);

  const numberOfgamesLosed = allGamesFinished.length - gamesWinned.length;
  const allGamesPoints = getAllGamesPoints(allGamesFinished, teamFullName);
  const averagePoints = getGamesPointsAverageForTeam(allGamesPoints);
  const team = teams.find((team) => team.full_name === teamFullName);

  return (
    <div className="team-stats-banner">
      <div className="left-side-team-stats-banner">
        <img
          src={`public/images/teamsLogos/${team?.name}.svg`}
          className="logo"
        />
        <div className="name-win-lose">
          <h2>{teamFullName}</h2>
          <p>
            {gamesWinned.length}V - {numberOfgamesLosed}D | classement
          </p>
        </div>
      </div>
      <PrimaryButton label="Retour" />
      <div className="right-side-team-stats-banner">
        <div className="ranking-average">
          <h3>PPG</h3>
          <span>Rank</span>
          <span>{averagePoints.toString()}</span>
        </div>
        <div className="ranking-average">
          <h3>RPG</h3>
          <span>Rank</span>
          <span>Average</span>
        </div>
        <div className="ranking-average">
          <h3>APG</h3>
          <span>Rank</span>
          <span>Average</span>
        </div>
        <div className="ranking-average">
          <h3>OPPG</h3>
          <span>Rank</span>
          <span>Average</span>
        </div>
      </div>
    </div>
  );
}
