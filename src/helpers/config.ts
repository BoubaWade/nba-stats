import { PlayerStats } from "../components/Players/playersTypes";

export const statslabelsAndValues = (stats: PlayerStats) => {
  return [
    { label: "Temps de jeu", value: stats.min },
    { label: "Points", value: stats.pts },
    { label: "Rebonds", value: stats.reb },
    { label: "Passes", value: stats.ast },
    { label: "Contres", value: stats.blk },
    { label: "Interceptions", value: stats.stl },
    { label: "Perte de balles", value: stats.turnover },
    { label: "Dribbles", value: stats.dreb },
  ];
};
