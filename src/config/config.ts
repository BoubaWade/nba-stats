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
export const tableHeaderStatsFields = [
  "Nom",
  "Points",
  "Rebonds",
  "Passes",
  "Contre",
  "Interc.",
  "Perte B.",
  "Dribb.",
  "Temps jeu",
  "Équipe",
];

export const getStatsBodyField = (stats: PlayerStats) => {
  return [
    { value: ` ${stats.player.first_name} ${stats.player.last_name}` },
    { value: stats.pts },
    { value: stats.reb },
    { value: stats.ast },
    { value: stats.blk },
    { value: stats.stl },
    { value: stats.turnover },
    { value: stats.dreb },
    { value: `${stats.min} min` },
    { value: stats.team.name },
  ];
};

export const getNavigationItems = (isActive: ActiveButton) => {
  return [
    {
      id: "isPlayersNavButton",
      label: "Joueurs",
      link: "/players",
      active: isActive.isPlayersNavButton ? "active" : "",
    },
    {
      id: "isTeamsNavButton",
      label: "Équipes",
      link: "/teams",
      active: isActive.isTeamsNavButton ? "active" : "",
    },
    {
      id: "isGamesNavButton",
      label: "Matchs",
      link: "/games",
      active: isActive.isGamesNavButton ? "active" : "",
    },
    {
      id: "isStatsNavButton",
      label: "Statistiques",
      link: "/stats",
      active: isActive.isStatsNavButton ? "active" : "",
    },
    {
      id: "isSeasonNavButton",
      label: "Saison",
      link: "/season",
      active: isActive.isSeasonNavButton ? "active" : "",
    },
  ];
};

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

export const scheduleTableHeaderFields = [
  "Date",
  "Adversaire",
  "Résultat",
  "Stade",
];
