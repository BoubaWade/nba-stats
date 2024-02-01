import { useContext } from "react";
import { TeamsContext } from "../../../contexts/teamsContext";

export default function SpecificTeam() {
  const { teams, specificTeamID } = useContext(TeamsContext);
  const specificTeamData = teams.find((team) => team.id === specificTeamID);
  return (
    <div className="specificTeam-container">
      <img src={`../../../../public/images/${specificTeamData?.name}.svg`} />
    </div>
  );
}
