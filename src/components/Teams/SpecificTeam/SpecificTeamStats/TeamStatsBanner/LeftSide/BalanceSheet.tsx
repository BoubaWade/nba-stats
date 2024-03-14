import { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import {
  getAllGamesFinishedByTeam,
  getAllWinnedGames,
} from "../../../../../../helpers/games";

export default function BalanceSheet() {
  const { teamFullName, allGamesByTeam } = useContext(GlobalContext);

  const allGamesFinished = getAllGamesFinishedByTeam(allGamesByTeam);
  const gamesWinned = getAllWinnedGames(allGamesFinished, teamFullName);
  const numberOfgamesLosed = allGamesFinished.length - gamesWinned.length;

  return (
    <div className="balance-sheet">
      <h2>{teamFullName}</h2>
      <p>
        {gamesWinned.length}
        <span>V</span> - {""}
        {numberOfgamesLosed}
        <span>D</span>
      </p>
    </div>
  );
}
