import "./graphsContent.css";
import { MenuSelect } from "react-menu-dropdown-list";
import { graphs, seasons, statOptions } from "../../../../../config/constants";
import { getPlayerStatsBySeason } from "../../../../../service/apiCall";
import { useContext, useState } from "react";
import { PlayersContext } from "../../../../../contexts/playersContext";
import { getSpecificStat } from "../../../../../helpers/players";
import { IoIosArrowDown } from "react-icons/io";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

export default function GraphsContent() {
  const { playerStats, playerStatsBySeason, setPlayerStatsBySeason } =
    useContext(PlayersContext);
  const [specificStat, setSpecificStat] = useState<number[]>([]);
  const [statName, setStatName] = useState("");
  const [showLabelSeason, setShowLabelSeason] = useState(true);
  const [showLabelStat, setShowLabelStat] = useState(true);
  const [showLabelGraph, setShowLabelGraph] = useState(true);
  const [showLineChart, setShowLineChart] = useState(false);
  const [showBarChart, setShowBarChart] = useState(false);
  const [isDisabledStatNameButton, setIsDisabledStatNameButton] =
    useState(true);
  const [isDisabledGraphTypeButton, setIsDisabledGraphTypeButton] =
    useState(true);

  const handleSelectASeason = (option: string) => {
    const playerId = playerStats[0]?.player.id;
    const year = option.split("-", 3)[0];
    getPlayerStatsBySeason(playerId, parseInt(year), setPlayerStatsBySeason);
    setShowLabelSeason(false);
    setIsDisabledStatNameButton(false);
  };
  const handleSelectStatName = (option: string) => {
    const stat = getSpecificStat(playerStatsBySeason, option);
    setSpecificStat(stat);
    setShowLabelStat(false);
    setIsDisabledGraphTypeButton(false);
    setStatName(option);
  };
  const handleSelectAGraph = (option: string) => {
    if (option === "Ligne") {
      setShowLineChart(true);
      setShowBarChart(false);
    }
    if (option === "Barre") {
      setShowLineChart(false);
      setShowBarChart(true);
    }
    setShowLabelGraph(false);
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
            onSelect={handleSelectASeason}
            classNameButton="menu-select"
            classNameItem="menu-select-items"
          />
        </div>
        <div className={isDisabledStatNameButton ? "disabled stats" : "stats"}>
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
        <div
          className={isDisabledGraphTypeButton ? "disabled graphs" : "graphs"}
        >
          {showLabelGraph && (
            <div className="label-container">
              <label>Type de graphe</label>
              <IoIosArrowDown className="arrow" />
            </div>
          )}
          <MenuSelect
            options={graphs}
            onSelect={handleSelectAGraph}
            classNameButton="menu-select"
            classNameItem="menu-select-items"
          />
        </div>
      </div>
      <div className="graph-container">
        {showLineChart && (
          <LineChart
            data={specificStat}
            statName={statName}
            className="line-graph"
            width={700}
            height={350}
            marginTop={40}
            marginRight={100}
            marginBottom={40}
            marginLeft={100}
          />
        )}
        {showBarChart && (
          <BarChart
            data={specificStat}
            className="bar-graph"
            width={600}
            height={350}
            marginTop={40}
            marginRight={40}
            marginBottom={40}
            marginLeft={40}
          />
        )}
      </div>
    </div>
  );
}
