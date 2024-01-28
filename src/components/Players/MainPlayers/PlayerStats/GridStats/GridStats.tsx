import GridStatsField from "./GridStatsField";
import useGridStats from "../../../../../hooks/useGridStats";

export default function GridStats() {
  const { gridFields } = useGridStats();

  return (
    <div className="grid-stats">
      {gridFields.map(({ label, stat }) => (
        <GridStatsField label={label} stat={stat} />
      ))}
    </div>
  );
}
