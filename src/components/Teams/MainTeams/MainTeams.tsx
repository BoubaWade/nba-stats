import { useContext } from "react";
import DivisionTeam from "./DivisionTeam";
import { getAllDivisionsWithTeams } from "../../../helpers/players";
import { TeamsContext } from "../../../contexts/teamsContext";

export default function MainTeams() {
  const { teams } = useContext(TeamsContext);
  const divisionsWithTeams = getAllDivisionsWithTeams(teams);

  return (
    <div className="main-teams">
      <div className="divisions-container">
        {divisionsWithTeams.map((division, index) => (
          <DivisionTeam key={index} division={division} />
        ))}
      </div>
    </div>
  );
}
