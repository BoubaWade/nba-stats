import "./teams.css";
import Navigation from "../reusable-ui/Navigation/Navigation";
import MainTeams from "./MainTeams/MainTeams";
import SpecificTeam from "./SpecificTeam/SpecificTeam";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import Cursor from "../reusable-ui/Cursor/Cursor";

export default function Teams() {
  const { showSpecificTeam } = useContext(GlobalContext);

  return (
    <div className="teams-container">
      <Navigation />
      <Cursor className="teams-button-cursor" />
      {!showSpecificTeam ? <MainTeams /> : <SpecificTeam />}
    </div>
  );
}
