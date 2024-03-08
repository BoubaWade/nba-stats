import "./playerStats.css";
import Banner from "./Banner/Banner";
import GridStats from "./GridStats/GridStats";
import GraphsContent from "./GraphsContent/GraphsContent";
import { useContext } from "react";
import { PlayersContext } from "../../../../contexts/playersContext";
import Loader from "../../../reusable-ui/Loader/Loader";
import NavigationMobile from "../../../reusable-ui/NavigationMobile.tsx/NavigationMobile";

export default function PlayerStats() {
  const { isLoadingPlayerStats } = useContext(PlayersContext);

  if (isLoadingPlayerStats) return <Loader className="player-stats-loader" />;
  return (
    <div className="player-container">
      <NavigationMobile />
      <Banner />
      <GridStats />
      <GraphsContent />
    </div>
  );
}
