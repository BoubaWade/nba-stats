import { useContext } from "react";
import { TeamsContext } from "../../../contexts/teamsContext";

const getLogoSourcePATH = (name: string) => {
  return `../../../../public/images/${name}.svg`;
};
export default function LogoBackground() {
  const { teams, specificTeamID } = useContext(TeamsContext);
  const specificTeamData = teams.find((team) => team.id === specificTeamID);
  if (!specificTeamData) return;
  return (
    <img
      src={getLogoSourcePATH(specificTeamData.name)}
      className="logo-background"
    />
  );
}
