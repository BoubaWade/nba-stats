import { useContext } from "react";
import PieGraph from "../../../../../reusable-ui/Graphs/PieGraph";
import LineChart from "../../../../../reusable-ui/Graphs/LineChart";
import "./statistics.css";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import {
  getAllGamesFinishedByTeam,
  getAllGamesPoints,
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
  const allGamesPoints = getAllGamesPoints(allGamesFinished, teamFullName);

  return (
    <div className="statistics-container">
      <div className="graphs">
        <div className="circle-graph-container">
          <PieGraph data={data} />
          <p>
            <span className="win">Victoires</span> &{" "}
            <span className="lose">Défaites</span>
          </p>
        </div>
        <div className="line-graph-container">
          <p>Points par match</p>
          <LineChart
            data={allGamesPoints}
            statName="Points"
            className="line-graph-points"
            marginTop={20}
            marginRight={10}
            marginBottom={70}
            marginLeft={50}
          />
        </div>
      </div>
      <div className="statistics-table-container">Table</div>
    </div>
  );
}
