import "./players.css";
import Navigation from "../reusable-ui/Navigation/Navigation";
import MainPlayers from "./MainPlayers/MainPlayers";
import { PlayersContext } from "../../contexts/playersContext";
import usePlayers from "../../hooks/usePlayers";

export default function Players() {
  const { playersContextValue } = usePlayers();

  return (
    <PlayersContext.Provider value={playersContextValue}>
      <div className="players-container">
        <Navigation />
        <MainPlayers />
      </div>
    </PlayersContext.Provider>
  );
}
