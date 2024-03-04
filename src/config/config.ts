import { PlayerStats } from "../components/Players/playersTypes";
import { ActiveButton } from "./globalTypes";

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

export const navigationItems = [
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
];

export const getButtonsSelectGamesConfig = (isActive: ActiveButton) => {
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

export const getButtonsSelectStatsConfig = (isActive: ActiveButton) => {
  return [
    {
      key: "isRosterActive",
      label: "Effectifs",
      active: isActive.isRosterActive ? "active" : "",
    },
    {
      key: "isScheduleActive",
      label: "Calendrier",
      active: isActive.isScheduleActive ? "active" : "",
    },
    {
      key: "isStatsActive",
      label: "Statistiques",
      active: isActive.isStatsActive ? "active" : "",
    },
  ];
};

export const starsPlayers1 = [
  { name: "NikolaJOKIC" },
  { name: "KevinDURANT" },
  { name: "LebronJAMES" },
];
export const starsPlayers2 = [
  { name: "StephenCURRY" },
  { name: "JoelEMBIID" },
  { name: "ANTETOKOUNMPO" },
];
