import { createContext } from "react";
import { PlayerStats, Player } from "../components/Players/playersTypes";

type PlayersContextType = {
  dataPlayers: Player[];
  setDataPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  rangeValue: string;
  setRangeValue: React.Dispatch<React.SetStateAction<string>>;
  showSpecificPlayer: boolean;
  setShowSpecificPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  playerStats: PlayerStats[];
  setPlayerStats: React.Dispatch<React.SetStateAction<PlayerStats[]>>;
  playerStatsBySeason: PlayerStats[];
  setPlayerStatsBySeason: React.Dispatch<React.SetStateAction<PlayerStats[]>>;
  allPlayersID: number[];
  setAllPlayersID: React.Dispatch<React.SetStateAction<number[]>>;
};

export const PlayersContext = createContext<PlayersContextType>({
  dataPlayers: [],
  setDataPlayers: () => {},
  rangeValue: "",
  setRangeValue: () => {},
  showSpecificPlayer: false,
  setShowSpecificPlayer: () => {},
  playerStats: [],
  setPlayerStats: () => {},
  playerStatsBySeason: [],
  setPlayerStatsBySeason: () => {},
  allPlayersID: [],
  setAllPlayersID: () => {},
});

// export function usePlayersContext() {
//   const players = useContext(PlayersContext);

//   if (players === undefined) {
//     throw new Error("usePalyersContext must be used with a PlayersContext");
//   }
//   return players;
// }
