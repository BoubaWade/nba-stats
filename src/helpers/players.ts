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

export const getSpecificStatAverage = (array: number[]) => {
  const sumOfArrayValues = array?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sumOfArrayValues / array.length;
  return average;
};
