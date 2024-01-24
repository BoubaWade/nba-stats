import React from "react";
import { PlayerType } from "../components/Players/playersTypes";

export const getAllPlayers = (
  query: string,
  setPlayers: (value: React.SetStateAction<PlayerType[]>) => void
) => {
  try {
    fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`)
      .then((res) => res.json())
      .then((result) => setPlayers(result.data));
  } catch (error) {
    console.error(error);
  }
};
