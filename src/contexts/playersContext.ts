import { createContext } from "react";
import { PlayerType } from "../components/Players/playersTypes";

type PlayersContextType = {
  dataPlayers: PlayerType[];
  setDataPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
  rangeValue: string;
  setRangeValue: React.Dispatch<React.SetStateAction<string>>;
};

export const PlayersContext = createContext<PlayersContextType>({
  dataPlayers: [],
  setDataPlayers: () => {},
  rangeValue: "",
  setRangeValue: () => {},
});

// export function usePlayersContext() {
//   const players = useContext(PlayersContext);

//   if (players === undefined) {
//     throw new Error("usePalyersContext must be used with a PlayersContext");
//   }
//   return players;
// }
