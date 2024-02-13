import "./games.css";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import NavBar from "../reusable-ui/NavBar/NavBar";
import MainGames from "./MainGames/MainGames";
import Cursor from "../reusable-ui/Cursor/Cursor";
import { useState } from "react";

export default function Games() {
  const [inputSearchValue, onChange] = useState("");

  return (
    <div className="games-container">
      <SideBar />
      <NavBar
        placeholder="Rechercher un match"
        value={inputSearchValue}
        onChange={onChange}
      />
      <Cursor className="games-button-cursor" />
      <MainGames />
    </div>
  );
}
