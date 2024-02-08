import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { PlayersContext } from "../contexts/playersContext";
import { getPlayerStatsBySeason } from "../service/apiCall";
import { getSpecificStat } from "../helpers/players";

export default function useGraphs() {
  const { playerStats } = useContext(GlobalContext);
  const { playerStatsBySeason, setPlayerStatsBySeason } =
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

  return {
    showLabelSeason,
    showLabelStat,
    showLabelGraph,
    isDisabledStatNameButton,
    isDisabledGraphTypeButton,
    handleSelectASeason,
    handleSelectStatName,
    handleSelectAGraph,
    specificStat,
    statName,
    showLineChart,
    showBarChart,
  };
}
