import { createContext } from "react";
import { PlayerStats } from "../components/Players/playersTypes";

type GlobalContextType = {
  // gameId: number | undefined;
  // setGameId: React.Dispatch<React.SetStateAction<number | undefined>>;
  statsGame: PlayerStats[];
  setStatsGame: React.Dispatch<React.SetStateAction<PlayerStats[]>>;
};
export const GlobalContext = createContext<GlobalContextType>({
  // gameId: undefined,
  // setGameId: () => {},
  statsGame: [],
  setStatsGame: () => {},
});
