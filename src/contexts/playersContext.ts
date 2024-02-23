import { createContext } from "react";
import { Player } from "../components/Players/playersTypes";

type PlayersContextType = {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  inputSearch: string | undefined;
  setInputSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
  isLoadingPlayers: boolean | null;
  setIsLoadingPlayers: React.Dispatch<React.SetStateAction<boolean | null>>;
  rangeValue: string;
  setRangeValue: React.Dispatch<React.SetStateAction<string>>;
  isLoadingPlayerStats: boolean | null;
  setIsLoadingPlayerStats: React.Dispatch<React.SetStateAction<boolean | null>>;
  errorPlayerStats: string | null;
  setErrorPlayerStats: React.Dispatch<React.SetStateAction<string | null>>;
};

export const PlayersContext = createContext<PlayersContextType>({
  players: [],
  setPlayers: () => {},
  inputSearch: "",
  setInputSearch: () => {},
  isLoadingPlayers: false,
  setIsLoadingPlayers: () => {},
  rangeValue: "",
  setRangeValue: () => {},
  isLoadingPlayerStats: false,
  setIsLoadingPlayerStats: () => {},
  errorPlayerStats: "",
  setErrorPlayerStats: () => {},
});

// export function usePlayersContext() {
//   const players = useContext(PlayersContext);

//   if (players === undefined) {
//     throw new Error("usePalyersContext must be used with a PlayersContext");
//   }
//   return players;
// }
