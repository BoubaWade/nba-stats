import "./graphsContent.css";
import Graphs from "./Graphs/Graphs";
import MenusSelect from "./MenusSelect/MenusSelect";
import useGraphs from "../../../../../hooks/useGraphs";
import { useEffect } from "react";

export default function GraphsContent() {
  const {
    handleSelectStatName,
    handleSelectAGraph,
    statName,
    showLineChart,
    showBarChart,
    specificStat,
  } = useGraphs();

  useEffect(() => {
    handleSelectStatName("Points");
    handleSelectAGraph("Barre");
  }, []);

  return (
    <div className="graphs-content">
      <MenusSelect
        handleSelectStatName={handleSelectStatName}
        handleSelectAGraph={handleSelectAGraph}
      />
      <Graphs
        specificStat={specificStat}
        statName={statName}
        showLineChart={showLineChart}
        showBarChart={showBarChart}
      />
    </div>
  );
}
