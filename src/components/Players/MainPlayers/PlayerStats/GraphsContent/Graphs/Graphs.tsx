import BarChart from "./BarChart";
import LineChart from "./LineChart";

type GraphsProps = {
  specificStat: number[];
  statName: string;
  showLineChart: boolean;
  showBarChart: boolean;
};

export default function Graphs({
  specificStat,
  statName,
  showLineChart,
  showBarChart,
}: GraphsProps) {
  return (
    <div className="graph-container">
      {showLineChart && (
        <LineChart
          data={specificStat}
          statName={statName}
          className="line-graph"
          marginTop={20}
          marginRight={10}
          marginBottom={40}
          marginLeft={30}
        />
      )}
      {showBarChart && (
        <BarChart
          data={specificStat}
          className="bar-graph"
          marginTop={20}
          marginRight={10}
          marginBottom={40}
          marginLeft={30}
        />
      )}
    </div>
  );
}
