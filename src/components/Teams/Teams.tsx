import "./teams.css";
import Navigation from "../reusable-ui/Navigation/Navigation";
import MainTeams from "./MainTeams/MainTeams";
import SpecificTeam from "./SpecificTeam/SpecificTeam";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import NavigationMobile from "../reusable-ui/NavigationMobile.tsx/NavigationMobile";

export default function Teams() {
  const { showSpecificTeam } = useContext(GlobalContext);

  return (
    <div className="teams-container">
      <NavigationMobile />
      <Navigation />
      {!showSpecificTeam ? <MainTeams /> : <SpecificTeam />}
    </div>
  );
}
