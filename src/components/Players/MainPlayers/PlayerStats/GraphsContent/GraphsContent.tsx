import "./graphsContent.css";
import Graphs from "./Graphs/Graphs";
import MenusSelect from "./MenusSelect/MenusSelect";
import useGraphs from "../../../../../hooks/useGraphs";

export default function GraphsContent() {
  const {
    showLabelStat,
    showLabelGraph,
    handleSelectStatName,
    handleSelectAGraph,
    statName,
    showLineChart,
    showBarChart,
    specificStat,
  } = useGraphs();

  return (
    <div className="graphs-content">
      <MenusSelect
        showLabelStat={showLabelStat}
        showLabelGraph={showLabelGraph}
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
