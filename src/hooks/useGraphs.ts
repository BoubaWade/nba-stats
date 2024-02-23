import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { getSpecificStat } from "../helpers/players";

export default function useGraphs() {
  const { playerStats } = useContext(GlobalContext);
  const [specificStat, setSpecificStat] = useState<number[]>([]);
  const [statName, setStatName] = useState("");
  const [showLabelStat, setShowLabelStat] = useState(true);
  const [showLabelGraph, setShowLabelGraph] = useState(true);
  const [showLineChart, setShowLineChart] = useState(false);
  const [showBarChart, setShowBarChart] = useState(false);

  const handleSelectStatName = (option: string) => {
    const stat = getSpecificStat(playerStats, option);
    setSpecificStat(stat);
    setShowLabelStat(false);
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
    showLabelStat,
    showLabelGraph,
    handleSelectStatName,
    handleSelectAGraph,
    specificStat,
    statName,
    showLineChart,
    showBarChart,
  };
}
