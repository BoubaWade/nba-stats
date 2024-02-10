import { PlayerStats } from "../components/Players/playersTypes";

export const getStatslabelsAndValues = (stats: PlayerStats) => {
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

export const sidebarItems = [
  {
    text: "Joueurs",
    link: "/players",
  },
  {
    text: "Équipes",
    link: "/teams",
  },
  {
    text: "Matchs",
    link: "/games",
  },
  {
    text: "Statistiques",
    link: "/stats",
  },
  {
    text: "Saison",
    link: "/season",
  },
  {
    text: "Réglages",
    link: "/settings",
  },
];
