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
  );
}
