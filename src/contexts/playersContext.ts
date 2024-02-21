import { createContext } from "react";
import { PlayerStats, Player } from "../components/Players/playersTypes";

type PlayersContextType = {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  inputSearch: string | undefined;
  setInputSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
  isLoading: boolean | null;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean | null>>;
  rangeValue: string;
  setRangeValue: React.Dispatch<React.SetStateAction<string>>;
  playerStatsBySeason: PlayerStats[];
  setPlayerStatsBySeason: React.Dispatch<React.SetStateAction<PlayerStats[]>>;
};

export const PlayersContext = createContext<PlayersContextType>({
  players: [],
  setPlayers: () => {},
  inputSearch: "",
  setInputSearch: () => {},
  isLoading: false,
  setIsLoading: () => {},
  rangeValue: "",
  setRangeValue: () => {},
  playerStatsBySeason: [],
  setPlayerStatsBySeason: () => {},
});

// export function usePlayersContext() {
//   const players = useContext(PlayersContext);

//   if (players === undefined) {
//     throw new Error("usePalyersContext must be used with a PlayersContext");
//   }
//   return players;
// }
