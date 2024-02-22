import "./playerStats.css";
import Banner from "./Banner/Banner";
import GridStats from "./GridStats/GridStats";
import GraphsContent from "./GraphsContent/GraphsContent";
import { useContext } from "react";
import { PlayersContext } from "../../../../contexts/playersContext";
import Loader from "../../../reusable-ui/Loader/Loader";

export default function PlayerStats() {
  const { isLoadingPlayerStats } = useContext(PlayersContext);

  if (isLoadingPlayerStats) return <Loader />;
  return (
    <div className="player-container">
      <Banner />
      <GridStats />
      <GraphsContent />
    </div>
  );
}
