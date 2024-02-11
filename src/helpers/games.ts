import { Game } from "../components/Teams/teamsTypes";

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

export const getGamesSortedByDate = (array: Game[]): Game[] => {
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
