import { Game, Value } from "../components/Teams/teamsTypes";
import {
  PERIOD_BEFORE_GAME,
  PERIOD_CURRENT_GAME,
  STATUS_AFTER_GAME,
} from "../config/constants";

const getDateFormatedWithOptions = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions
): string => {
  const dateToFormat = new Date(date);
  const dateFormated = dateToFormat.toLocaleDateString("fr-FR", options);
  return dateFormated;
};
export const getDateFormated = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return getDateFormatedWithOptions(date, options);
};
export const getDateWithHour = (date: Date | string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return getDateFormatedWithOptions(date, options);
};

export const sortAscendingByDate = (array: Game[]): Game[] => {
  return array.sort(
    (a, b) => (new Date(a.date) as any) - (new Date(b.date) as any)
  );
};
export const sortDescendingByDate = (array: Game[]): Game[] => {
  return array.sort(
    (a, b) => (new Date(b.date) as any) - (new Date(a.date) as any)
  );
};

export const getGameStatus = (status: string) => {
  switch (status) {
    case "1st Qtr":
      return "1er Q";
    case "2nd Qtr":
      return "2ème Q";
    case "Halftime":
      return "Mi-temps";
    case "3rd Qtr":
      return "3ème Q";
    case "4th Qtr":
      return "4ème Q";
    default:
      return null;
  }
};

export const sortAscendingByStatusDate = (array: Game[]): Game[] => {
  return array.sort(
    (a, b) => (new Date(a.status) as any) - (new Date(b.status) as any)
  );
};

const getNotStartedGames = (games: Game[]) => {
  return games.filter((game) => game.period === PERIOD_BEFORE_GAME);
};

const getCurrentGames = (games: Game[]) => {
  return games.filter(
    (game) =>
      PERIOD_CURRENT_GAME.includes(game.period) &&
      game.status !== STATUS_AFTER_GAME
  );
};
const getFinishedGames = (games: Game[]) => {
  return games.filter((game) => game.status === STATUS_AFTER_GAME);
};

export const sortGamesByStatus = (games: Game[]) => {
  const notStartedGames = getNotStartedGames(games);
  const startedGames = getCurrentGames(games);
  const finishedGames = getFinishedGames(games);

  return [
    ...startedGames,
    ...sortAscendingByStatusDate(notStartedGames),
    ...sortDescendingByDate(finishedGames),
  ];
};

export const filterGamesByStatus = (games: Game[], value: string | null) => {
  const deepCloneGames: Game[] = JSON.parse(JSON.stringify(games));

  switch (value) {
    case "À venir":
      return getNotStartedGames(deepCloneGames);
    case "Tous les matchs":
      return deepCloneGames;
    case "En cours...":
      return getCurrentGames(deepCloneGames);
    case "Terminés":
      return getFinishedGames(deepCloneGames);
  }
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getStartAndEndDateRange = (value: Value) => {
  if (value) {
    const startDate = formatDate(
      Array.isArray(value) ? value[0] ?? new Date() : value
    );
    const endDate = formatDate(
      Array.isArray(value) ? value[1] ?? new Date() : value
    );
    return { startDate, endDate };
  }
};

export const uncapitalize = (str: string) => {
  return str.charAt(0).toLocaleLowerCase() + str.slice(1);
};
