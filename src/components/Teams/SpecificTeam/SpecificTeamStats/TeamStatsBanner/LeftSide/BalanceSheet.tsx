import { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import { STATUS_AFTER_GAME } from "../../../../../../config/constants";
import { getAllWinnedGames } from "../../../../../../helpers/games";

export default function BalanceSheet() {
  const { teamFullName, allGamesByTeam } = useContext(GlobalContext);

  const allGamesFinished = allGamesByTeam.filter(
    (game) => game.status === STATUS_AFTER_GAME
  );
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
