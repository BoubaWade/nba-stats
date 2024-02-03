import "./teams.css";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import NavBar from "../reusable-ui/NavBar/NavBar";
import MainTeams from "./MainTeams/MainTeams";
import SpecificTeam from "./SpecificTeam/SpecificTeam";
import { useEffect, useState } from "react";
import { TeamsContext } from "../../contexts/teamsContext";
import { Team } from "../Players/playersTypes";
import { getAllTeams } from "../../service/apiCall";

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [showSpecificTeam, setShowSpecificTeam] = useState(false);
  const [specificTeamID, setSpecificTeamID] = useState(0);
  const [teamFullName, setTeamFullName] = useState("");
  const [yearOfTheGames, setYearOfTheGames] = useState("2023");

  useEffect(() => {
    getAllTeams(setTeams);
  }, []);

  const teamsContextValue = {
    teams,
    setTeams,
    showSpecificTeam,
    setShowSpecificTeam,
    specificTeamID,
    setSpecificTeamID,
    teamFullName,
    setTeamFullName,
    yearOfTheGames,
    setYearOfTheGames,
  };
  return (
    <TeamsContext.Provider value={teamsContextValue}>
      <div className="teams-container">
        <SideBar />
        <NavBar
          placeholder="Rechercher une équipe"
          value=""
          onChange={() => {}}
        />
        {!showSpecificTeam ? <MainTeams /> : <SpecificTeam />}
      </div>
    </TeamsContext.Provider>
  );
}
