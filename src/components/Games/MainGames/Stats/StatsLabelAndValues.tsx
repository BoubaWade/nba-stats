import { statslabelsAndValues } from "../../../../helpers/config";
import { PlayerStats } from "../../../Players/playersTypes";

type LabelAndValuesProps = {
  stats: PlayerStats;
};

export default function StatsLabelAndValues({ stats }: LabelAndValuesProps) {
  const StatslabelsAndValues = statslabelsAndValues(stats);

  return (
    <>
      {StatslabelsAndValues.map(({ label, value }) => (
        <p key={label}>
          {label} : <span>{value}</span>
        </p>
      ))}
    </>
  );
}
