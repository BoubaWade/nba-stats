import "./players.css";
import Home from "./HomePage/Home";
import NavBar from "../reusable-ui/NavBar/NavBar";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import MainPlayers from "./MainPlayers/MainPlayers";
import { PlayersContext } from "../../contexts/playersContext";
import Cursor from "../reusable-ui/Cursor/Cursor";
import usePlayers from "../../hooks/usePlayers";

export default function Players() {
  const { isHomeDisplayed, inputSearch, playersContextValue, handleChange } =
    usePlayers();

  return (
    <PlayersContext.Provider value={playersContextValue}>
      <div className="players-container">
        {isHomeDisplayed && <Home />}
        <SideBar />
        <NavBar
          placeholder="Rechercher un joueur"
          value={inputSearch}
          onChange={handleChange}
        />
        <Cursor className="players-button-cursor" />
        <MainPlayers />
      </div>
    </PlayersContext.Provider>
  );
}
