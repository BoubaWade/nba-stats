import { createContext } from "react";
import { PlayerStats, Player } from "../components/Players/playersTypes";

type PlayersContextType = {
  dataPlayers: Player[];
  setDataPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  rangeValue: string;
  setRangeValue: React.Dispatch<React.SetStateAction<string>>;
  playerStatsBySeason: PlayerStats[];
  setPlayerStatsBySeason: React.Dispatch<React.SetStateAction<PlayerStats[]>>;
};

export const PlayersContext = createContext<PlayersContextType>({
  dataPlayers: [],
  setDataPlayers: () => {},
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
