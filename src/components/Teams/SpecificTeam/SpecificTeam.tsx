import "./specificTeam.css";
import SpecificTeamGames from "./SpecificTeamGames/SpecificTeamGames";
import LogoBackground from "./LogoBackground";
import SpecificTeamStats from "./SpecificTeamStats/SpecificTeamStats";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";

export default function SpecificTeam() {
  const { showSpecificTeamStats, showspecificTeamGames } =
    useContext(GlobalContext);

  return (
    <div className="specificTeam-container">
      {showspecificTeamGames && (
        <>
          <LogoBackground />
          <SpecificTeamGames />
        </>
      )}
      {showSpecificTeamStats && <SpecificTeamStats />}
    </div>
  );
}
