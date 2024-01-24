import { createContext, useContext } from "react";
import { PlayerType } from "../components/Players/playersTypes";

export const PlayersContext = createContext<PlayerType[] | undefined>(
  undefined
);

export function usePlayersContext() {
  const players = useContext(PlayersContext);

  if (players === undefined) {
    throw new Error("usePalyersContext must be used with a PlayersContext");
  }
  return players;
}
