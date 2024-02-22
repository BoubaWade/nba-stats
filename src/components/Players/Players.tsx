import "./players.css";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import MainPlayers from "./MainPlayers/MainPlayers";
import { PlayersContext } from "../../contexts/playersContext";
import Cursor from "../reusable-ui/Cursor/Cursor";
import usePlayers from "../../hooks/usePlayers";

export default function Players() {
  const { playersContextValue } = usePlayers();

  return (
    <PlayersContext.Provider value={playersContextValue}>
      <div className="players-container">
        <SideBar />
        <Cursor className="players-button-cursor" />
        <MainPlayers />
      </div>
    </PlayersContext.Provider>
  );
}
