import { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import {
  getAllGamesFinishedByTeam,
  getAllWinnedGames,
} from "../../../../../../helpers/games";
import Loader from "../../../../../reusable-ui/Loader/Loader";

export default function BalanceSheet() {
  const { teamFullName, allGamesByTeam } = useContext(GlobalContext);

  const allGamesFinished = getAllGamesFinishedByTeam(allGamesByTeam);
  const gamesWinned = getAllWinnedGames(allGamesFinished, teamFullName);
  const numberOfgamesLosed = allGamesFinished.length - gamesWinned.length;

  if (gamesWinned.length < 10) return <Loader />;
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
