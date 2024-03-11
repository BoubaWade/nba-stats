import { getStatsBodyField } from "../../../../../config/config";
import { PlayerStats } from "../../../../Players/playersTypes";

type StatsTableBodyRowProps = {
  stats: PlayerStats;
};

export default function StatsTableBodyRow({ stats }: StatsTableBodyRowProps) {
  return (
    <tr>
      {getStatsBodyField(stats).map((stat) => (
        <td>{stat.value}</td>
      ))}
    </tr>
  );
}
