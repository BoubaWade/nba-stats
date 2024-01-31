import "./teams.css";
import SideBar from "../reusable-ui/Sidebar/SideBar";
import NavBar from "../reusable-ui/NavBar/NavBar";
import { getAllTeams } from "../../service/apiCall";
import { useEffect, useState } from "react";
import { Team } from "../Players/playersTypes";
import { getAllDivisionsWithTeams } from "../../helpers/players";
import DivisionTeam from "./DivisionTeam";

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  useEffect(() => {
    getAllTeams(setTeams);
  }, []);

  const divisionsWithTeams = getAllDivisionsWithTeams(teams);

  return (
    <div className="teams-container">
      <SideBar />
      <NavBar
        placeholder="Rechercher une équipe"
        value=""
        onChange={() => {}}
      />
      <div className="main-teams">
        {divisionsWithTeams.map((division, index) => (
          <DivisionTeam key={index} division={division} />
        ))}
      </div>
    </div>
  );
}
