import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import { PlayerStats } from "../../../Players/playersTypes";
import StatsCard from "./StatsCard";

export default function StatsCardsList() {
  const { gameStats } = useContext(GlobalContext);
  const condition = (stat: PlayerStats) => {
    return stat.min !== "00" && stat.min !== null && stat.min !== "0:00";
  };
  const getStatIfTheyPlay = gameStats.filter((stat) => condition(stat));

  return (
    <ul className="list-stats-card">
      {getStatIfTheyPlay.map((stats) => (
        <StatsCard key={stats.id} stats={stats} />
      ))}
    </ul>
  );
}
