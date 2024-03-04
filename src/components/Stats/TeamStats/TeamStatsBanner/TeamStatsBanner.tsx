import "./teamStatsBanner.css";
import {
  getAllGamesPoints,
  getAllWinnedGames,
  getGamesPointsAverageForTeam,
} from "../../../../helpers/games";
import { STATUS_AFTER_GAME } from "../../../../config/constants";
import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import SecondaryButton from "../../../reusable-ui/SecondaryButton/SecondaryButton";

export default function TeamStatsBanner() {
  const { teamFullName, allGamesByTeam, teams, setTeamStatsDisplayed } =
    useContext(GlobalContext);
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
        <div className="balance-sheet">
          <h2>{teamFullName}</h2>
          <p>
            {gamesWinned.length}
            <span>V</span> - {""}
            {numberOfgamesLosed}
            <span>D</span>
          </p>
        </div>
      </div>
      <SecondaryButton
        label="Retour"
        className="return-button"
        onClick={() => setTeamStatsDisplayed(false)}
      />
      <div className="right-side-team-stats-banner">
        <h3>Points par match</h3>
        <span>{averagePoints.toString()}</span>
      </div>
    </div>
  );
}
