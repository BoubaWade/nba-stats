import "./teams.css";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import NavBar from "../reusable-ui/NavBar/NavBar";
import MainTeams from "./MainTeams/MainTeams";
import SpecificTeam from "./SpecificTeam/SpecificTeam";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import Cursor from "../reusable-ui/Cursor/Cursor";

export default function Teams() {
  const { showSpecificTeam } = useContext(GlobalContext);

  return (
    <div className="teams-container">
      <SideBar />
      <NavBar
        placeholder="Rechercher une équipe"
        value=""
        onChange={() => {}}
      />
      <Cursor className="teams-button-cursor" />
      {!showSpecificTeam ? <MainTeams /> : <SpecificTeam />}
    </div>
  );
}
