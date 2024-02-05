import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import StatsCard from "./StatsCard";
import { PlayerStats } from "../../../Players/playersTypes";

export default function ListStatsCard() {
  const { statsGame } = useContext(GlobalContext);

  const condition = (stat: PlayerStats) => {
    return stat.min !== "00" && stat.min !== null && stat.min !== "0:00";
  };
  const getStatIfTheyPlay = statsGame.filter((stat) => condition(stat));

  return (
    <ul className="list-stats-card">
      {getStatIfTheyPlay.map((stats) => (
        <StatsCard key={stats.id} stats={stats} />
      ))}
    </ul>
  );
}
