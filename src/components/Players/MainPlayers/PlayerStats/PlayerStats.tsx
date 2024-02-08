import "./playerStats.css";
import Banner from "./Banner/Banner";
import GridStats from "./GridStats/GridStats";
import GraphsContent from "./GraphsContent/GraphsContent";
// import Loader from "../../../reusable-ui/Loader/Loader";
export default function PlayerStats() {
  // const { playerStats } = useContext(PlayersContext);
  // console.log(playerStats);
  // if (!playerStats) return <Loader />;
  return (
    <div className="player-container">
      <Banner />
      <GridStats />
      <GraphsContent />
    </div>
  );
}
