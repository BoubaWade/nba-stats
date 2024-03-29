import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";

export default function LogoBackground() {
  const { teams, specificTeamID } = useContext(GlobalContext);
  const specificTeamData = teams.find((team) => team.id === specificTeamID);

  if (!specificTeamData) return;
  return (
    <img
      src={`/images/teamsLogos/${specificTeamData.name}.svg`}
      className="logo-background"
    />
  );
}
