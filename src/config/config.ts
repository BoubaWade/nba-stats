import { PlayerStats } from "../components/Players/playersTypes";

export const getStatslabelsAndValues = (stats: PlayerStats) => {
  return [
    { label: "Temps de jeu", value: ` ${stats.min} min` },
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
    link: "/",
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

type Active = {
  isAllGames: boolean;
  isBeforeGames: boolean;
  isCurrentGames: boolean;
  isAfterGames: boolean;
};
export const getButtonsConfig = (isActive: Active) => {
  return [
    {
      key: "isAllGames",
      label: "Tous les matchs",
      active: isActive.isAllGames ? "active-button" : "",
    },
    {
      key: "isBeforeGames",
      label: "À venir",
      active: isActive.isBeforeGames ? "active-button" : "",
    },
    {
      key: "isCurrentGames",
      label: "En cours...",
      active: isActive.isCurrentGames ? "active-button" : "",
    },
    {
      key: "isAfterGames",
      label: "Terminés",
      active: isActive.isAfterGames ? "active-button" : "",
    },
  ];
};
// export const teamsName = [
//   "76ers",
//   "Celtics",
//   "Raptors",
//   "Cavaliers",
//   "Lakers",
//   "Clippers",
//   "Bucks",
//   "Kings",
//   "Nets",
//   "Mavericks",
//   "Knicks",
//   "Hornets",
//   "Magic",
//   "Wizards",
//   "Hawks",
//   "Warriors",
//   "Trail Blazers",
//   "Spurs",
//   "Bulls",
//   "Rockets",
//   "Grizzlies",
//   "Heat",
//   "Nuggets",
//   "Pacers",
//   "Thunder",
//   "Jazz",
//   "Pistons",
//   "Pelicans",
//   "Suns",
//   "Timberwolves",
// ];
