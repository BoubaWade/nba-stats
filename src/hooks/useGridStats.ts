import { useContext } from "react";
import { PlayersContext } from "../contexts/playersContext";
import {
  getPasses,
  getPoints,
  getRebounds,
  getSpecificStatAverage,
} from "../helpers/players";

export default function useGridStats() {
  const { playerStats } = useContext(PlayersContext);
  const points = getPoints(playerStats);
  const passes = getPasses(playerStats);
  const rebounds = getRebounds(playerStats);
  const averagePoints = getSpecificStatAverage(points);
  const averagePasses = getSpecificStatAverage(passes);
  const averageRebounds = getSpecificStatAverage(rebounds);
  const gridFields = [
    { label: "Points", stat: averagePoints },
    { label: "Passes", stat: averagePasses },
    { label: "Rebonds", stat: averageRebounds },
  ];
  return { gridFields };
}
