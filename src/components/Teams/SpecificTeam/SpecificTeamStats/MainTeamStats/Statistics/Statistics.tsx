import { useContext } from "react";
import PieGraph from "../../../../../reusable-ui/PieGraph/PieGraph";
import "./statistics.css";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import {
  getAllGamesFinishedByTeam,
  getAllWinnedGames,
} from "../../../../../../helpers/games";

export default function Statistics() {
  const { teamFullName, allGamesByTeam } = useContext(GlobalContext);

  const allGamesFinished = getAllGamesFinishedByTeam(allGamesByTeam);
  const gamesWinned = getAllWinnedGames(allGamesFinished, teamFullName);
  const numberOfgamesLosed = allGamesFinished.length - gamesWinned.length;
  const gamesWinnedAverage = Math.ceil(
    (((gamesWinned.length * 100) / allGamesFinished.length) * 10) / 10
  );
  const gamesLosededAverage = Math.floor(
    (((numberOfgamesLosed * 100) / allGamesFinished.length) * 10) / 10
  );
  const data = [
    {
      value: gamesLosededAverage,
      title: "Défaites",
    },
    {
      value: gamesWinnedAverage,
      title: "Victoire",
    },
  ];

  return (
    <div className="statistics-container">
      <div className="graphs">
        <div className="circle-graph-container">
          <p>
            <span className="win">Victoires</span> &{" "}
            <span className="lose">Défaites</span>
          </p>
          <PieGraph data={data} />
        </div>
        <div className="line-graph-container">LineGraph</div>
      </div>
      <div className="statistics-table-container">Table</div>
    </div>
  );
}
