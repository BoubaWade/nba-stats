import "./playerStats.css";
import { useContext } from "react";
import { PlayersContext } from "../../../../contexts/playersContext";
import { MenuSelect } from "react-menu-dropdown-list";
import { seasons } from "../../../../config/constants";
import Banner from "./Banner";
import GridStats from "./GridStats";
// import Loader from "../../../reusable-ui/Loader/Loader";

export default function PlayerStats() {
  const { playerStats } = useContext(PlayersContext);
  // console.log(playerStats);
  // if (!playerStats) return <Loader />;
  return (
    <div className="player-container">
      <Banner />
      <GridStats />
      <div>
        <div>
          <label>Statistiques du joueur</label>
          <MenuSelect
            options={["Points", "Passes", "Rebonds", "Steal"]}
            onSelect={() => {}}
            classNameContainer=""
            classNameButton=""
            classNameList=""
            classNameItem=""
          />
        </div>
        <div>
          <label>Saison</label>
          <MenuSelect
            options={seasons}
            onSelect={() => {}}
            classNameContainer=""
            classNameButton=""
            classNameList=""
            classNameItem=""
          />
        </div>
      </div>
      {/* {playerStats.map((stat) => (
        <>
          <p>{stat.ast}</p>
          <p>{stat.blk}</p>
          <p>{stat.min}</p>
          <p>{stat.pts}</p>
          <p>{stat.reb}</p>
          <p>{stat.stl}</p>
        </>
      ))} */}
    </div>
  );
}
