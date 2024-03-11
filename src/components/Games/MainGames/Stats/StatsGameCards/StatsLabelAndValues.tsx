import { getStatslabelsAndValues } from "../../../../../config/config";
import { PlayerStats } from "../../../../Players/playersTypes";

type LabelAndValuesProps = {
  stats: PlayerStats;
};

export default function StatsLabelAndValues({ stats }: LabelAndValuesProps) {
  const statslabelsAndValues = getStatslabelsAndValues(stats);

  return (
    <>
      {statslabelsAndValues.map(({ label, value }) => (
        <p key={label}>
          {label} : <span>{value}</span>
        </p>
      ))}
    </>
  );
}
