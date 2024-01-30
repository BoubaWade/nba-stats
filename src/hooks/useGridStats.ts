import { useContext } from "react";
import { PlayersContext } from "../contexts/playersContext";
import {
  getBlocks,
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
  const blocks = getBlocks(playerStats);
  const averagePoints = getSpecificStatAverage(points);
  const averagePasses = getSpecificStatAverage(passes);
  const averageRebounds = getSpecificStatAverage(rebounds);
  const averageBlocks = getSpecificStatAverage(blocks);
  const gridFields = [
    { label: "Points", stat: averagePoints },
    { label: "Rebonds", stat: averageRebounds },
    { label: "Passes", stat: averagePasses },
    { label: "Contres", stat: averageBlocks },
  ];
  return { gridFields };
}
