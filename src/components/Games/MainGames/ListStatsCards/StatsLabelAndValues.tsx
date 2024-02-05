import { PlayerStats } from "../../../Players/playersTypes";

type LabelAndValuesProps = {
  stats: PlayerStats;
};

export default function StatsLabelAndValues({ stats }: LabelAndValuesProps) {
  const labelsAndValues = [
    { label: "Temps de jeu", value: stats.min },
    { label: "Points", value: stats.pts },
    { label: "Rebonds", value: stats.reb },
    { label: "Passes", value: stats.ast },
    { label: "Contres", value: stats.blk },
    { label: "Interceptions", value: stats.stl },
    { label: "Perte de balles", value: stats.turnover },
    { label: "Dribbles", value: stats.dreb },
  ];

  return (
    <>
      {labelsAndValues.map((stat, index) => (
        <p key={index}>
          {stat.label} : <span>{stat.value}</span>
        </p>
      ))}
    </>
  );
}
