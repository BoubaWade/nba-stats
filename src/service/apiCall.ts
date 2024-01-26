import React from "react";
import { PlayerStats, Player } from "../components/Players/playersTypes";

// const filterArray = (array: React.SetStateAction<Player[]>) => {
//   array.filter((data)=> )
// };
export const getAllPlayers = (
  query: string,
  setPlayers: (value: React.SetStateAction<Player[]>) => void
) => {
  try {
    fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`)
      .then((res) => res.json())
      .then((result) => setPlayers(result.data));
  } catch (error) {
    console.error(error);
  }
};
// export const getPlayerStats = (
//   playerId: number,
//   season: number,
//   setPlayerStats: (value: React.SetStateAction<PlayerStats[]>) => void
// ) => {
//   try {
//     fetch(
//       `https://www.balldontlie.io/api/v1/stats?seasons[]=${season}&player_ids[]=${playerId}&postseason=false`
//     )
//       .then((res) => res.json())
//       .then((result) => setPlayerStats(result.data));
//   } catch (error) {
//     console.error(error);
//   }
// };
export const getPlayerStats = (
  playerId: number,
  setPlayerStats: (value: React.SetStateAction<PlayerStats[]>) => void
) => {
  try {
    fetch(
      `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}&postseason=false`
    )
      .then((res) => res.json())
      .then((result) => setPlayerStats(result.data));
  } catch (error) {
    console.error(error);
  }
};
