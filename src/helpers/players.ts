import { PlayerStats } from "../components/Players/playersTypes";

export const getPoints = (array: PlayerStats[]): number[] => {
  return array.map((stats) => stats.pts);
};

export const getPasses = (array: PlayerStats[]): number[] => {
  return array.map((stats) => stats.ast);
};
export const getRebounds = (array: PlayerStats[]): number[] => {
  return array.map((stats) => stats.reb);
};
export const getBlocks = (array: PlayerStats[]): number[] => {
  return array.map((stats) => stats.blk);
};

export const getSpecificStatAverage = (array: number[]) => {
  const sumOfArrayValues = array?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sumOfArrayValues / array.length;
  return average;
};

export const getSpecificStat = (
  array: PlayerStats[],
  specificStat: string
): number[] => {
  let result: number[] = [];
  switch (specificStat) {
    case "Points":
      result = array.map((stat) => stat.pts);
      break;
    case "Passes":
      result = array.map((stat) => stat.ast);
      break;
    case "Rebonds":
      result = array.map((stat) => stat.reb);
      break;
    case "Contres":
      result = array.map((stat) => stat.blk);
      break;
  }
  return result;
};
