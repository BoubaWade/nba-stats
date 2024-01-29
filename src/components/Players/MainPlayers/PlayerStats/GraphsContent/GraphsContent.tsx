import "./graphsContent.css";
import { MenuSelect } from "react-menu-dropdown-list";
import { seasons, statOptions } from "../../../../../config/constants";
import { getPlayerStatsBySeason } from "../../../../../service/apiCall";
import { useContext, useState } from "react";
import { PlayersContext } from "../../../../../contexts/playersContext";
import { getSpecificStat } from "../../../../../helpers/players";
// import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Line from "./Line";

export default function GraphsContent() {
  const { playerStats, playerStatsBySeason, setPlayerStatsBySeason } =
    useContext(PlayersContext);
  const [specificStat, setSpecificStat] = useState<number[]>([]);
  const [showLabelSeason, setShowLabelSeason] = useState(true);
  const [showLabelStat, setShowLabelStat] = useState(true);

  const handleSelectYear = (option: string) => {
    const playerId = playerStats[0]?.player.id;
    const year = option.split("-", 3)[0];
    getPlayerStatsBySeason(playerId, parseInt(year), setPlayerStatsBySeason);
    setShowLabelSeason(false);
  };
  const handleSelectStatName = (option: string) => {
    const statName = getSpecificStat(playerStatsBySeason, option);
    setSpecificStat(statName);
    setShowLabelStat(false);
  };

  return (
    <div className="graphs-content">
      <div className="menu-select-container">
        <div className="season">
          {showLabelSeason && (
            <div className="label-container">
              <label>Saison</label>
              <IoIosArrowDown className="arrow" />
            </div>
          )}
          <MenuSelect
            options={seasons}
            onSelect={handleSelectYear}
            classNameButton="menu-select"
            classNameItem="menu-select-items"
          />
        </div>
        <div className="stats">
          {showLabelStat && (
            <div className="label-container">
              <label>Statistiques</label>
              <IoIosArrowDown className="arrow" />
            </div>
          )}
          <MenuSelect
            options={statOptions}
            onSelect={handleSelectStatName}
            classNameButton="menu-select"
            classNameItem="menu-select-items"
          />
        </div>
        <div className="season">
          <div className="label-container">
            <label>Type de graphique</label>
            <IoIosArrowDown className="arrow" />
          </div>
          <MenuSelect
            options={[]}
            onSelect={() => {}}
            classNameButton="menu-select"
            classNameItem="menu-select-items"
          />
        </div>
      </div>
      <div className="line-graph-container">
        <Line
          data={specificStat}
          className="line-graph"
          width={600}
          height={350}
          marginTop={40}
          marginRight={40}
          marginBottom={40}
          marginLeft={40}
        />
      </div>
    </div>
  );
}
