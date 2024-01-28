import "./graphsContent.css";
import { MenuSelect } from "react-menu-dropdown-list";
import { seasons } from "../../../../../config/constants";
import { getPlayerStatsBySeason } from "../../../../../service/apiCall";
import { useContext, useState } from "react";
import { PlayersContext } from "../../../../../contexts/playersContext";
import { getSpecificStat } from "../../../../../helpers/players";
import Line from "./Line";

export default function GraphsContent() {
  const { playerStats, playerStatsBySeason, setPlayerStatsBySeason } =
    useContext(PlayersContext);
  const [specificStat, setSpecificStat] = useState<number[]>([]);
  const [statName, setStatName] = useState("");
  // const [playerStatsBySeason, setPlayerStatsBySeason] = useState<PlayerStats[]>(
  //   []
  // );
  const handleSelectStatName = (option: string) => {
    const playerId = playerStats[0]?.player.id;
    getPlayerStatsBySeason(playerId, parseInt(option), setPlayerStatsBySeason);
    setStatName(option);
  };
  const handleSelectSeason = (option: string) => {
    const specificStat = getSpecificStat(playerStatsBySeason, option);
    setSpecificStat(specificStat);
  };

  return (
    <div className="graphs-content">
      <div className="menu-select-container">
        <div className="stats">
          <label>Statistiques du joueur</label>
          <MenuSelect
            options={["Points", "Passes", "Rebonds"]}
            onSelect={(option) => handleSelectStatName(option)}
            classNameContainer=""
            classNameButton=""
            classNameList=""
            classNameItem=""
          />
        </div>
        <div className="season">
          <label>Saison</label>
          <MenuSelect
            options={seasons}
            onSelect={(option) => handleSelectSeason(option)}
            classNameContainer=""
            classNameButton=""
            classNameList=""
            classNameItem=""
          />
        </div>
      </div>
      <div className="line-graph-container">
        <Line
          data={[]}
          statName={statName}
          className="line-graph"
          classNameStat="stat-name"
          width={500}
          height={300}
          marginTop={20}
          marginRight={20}
          marginBottom={20}
          marginLeft={20}
        />
      </div>
      {/* <Bar
        data={[1.2, 5, 1.3, 1.8, 2.2, 3, 1.8, 4, 1.7]}
        dimensions={dimensions}
      /> */}
    </div>
  );
}
