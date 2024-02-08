import "./graphsContent.css";
import Graphs from "./Graphs/Graphs";
import MenusSelect from "./MenusSelect/MenusSelect";
import useGraphs from "../../../../../hooks/useGraphs";

export default function GraphsContent() {
  const {
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
  } = useGraphs();

  return (
    <div className="graphs-content">
      <MenusSelect
        showLabelSeason={showLabelSeason}
        showLabelStat={showLabelStat}
        showLabelGraph={showLabelGraph}
        isDisabledStatNameButton={isDisabledStatNameButton}
        isDisabledGraphTypeButton={isDisabledGraphTypeButton}
        handleSelectASeason={handleSelectASeason}
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
