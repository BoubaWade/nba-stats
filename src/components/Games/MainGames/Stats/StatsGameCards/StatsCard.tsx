import { useNavigate } from "react-router-dom";
import { PlayerStats } from "../../../../Players/playersTypes";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import { getPlayerStats } from "../../../../../service/apiCall";
import StatsLabelAndValues from "./StatsLabelAndValues";
import TitleAndBgImage from "./TitleAndBgImage";

type StatsCardProps = {
  stats: PlayerStats;
};

export default function StatsCard({ stats }: StatsCardProps) {
  const { setShowSpecificPlayer, setPlayerStats } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClickCard = () => {
    getPlayerStats(stats.player.id, setPlayerStats);
    navigate("/Players");
    setShowSpecificPlayer(true);
  };

  return (
    <li key={stats.id} className="stats-card">
      <TitleAndBgImage stats={stats} onClick={handleClickCard} />
      <StatsLabelAndValues stats={stats} />
    </li>
  );
}
