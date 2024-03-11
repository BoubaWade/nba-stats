import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import StatsCard from "./StatsCard";
import { getStatIfTheyPlay } from "../../../../../helpers/players";

export default function StatsCardsList() {
  const { gameStats } = useContext(GlobalContext);

  const statsToDisplay = getStatIfTheyPlay(gameStats);

  return (
    <ul className="list-stats-card">
      {statsToDisplay.map((stats) => (
        <StatsCard key={stats.id} stats={stats} />
      ))}
    </ul>
  );
}
