import "./players.css";
import Navigation from "../reusable-ui/Navigation/Navigation";
import MainPlayers from "./MainPlayers/MainPlayers";
import { PlayersContext } from "../../contexts/playersContext";
import Cursor from "../reusable-ui/Cursor/Cursor";
import usePlayers from "../../hooks/usePlayers";

export default function Players() {
  const { playersContextValue } = usePlayers();

  return (
    <PlayersContext.Provider value={playersContextValue}>
      <div className="players-container">
        <Navigation />
        <Cursor className="players-button-cursor" />
        <MainPlayers />
      </div>
    </PlayersContext.Provider>
  );
}
