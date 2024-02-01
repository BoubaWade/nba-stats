import { useContext } from "react";
import { TeamsContext } from "../../../contexts/teamsContext";
const getLogoSourcePATH = (name: string) => {
  return `../../../../public/images/${name}.svg`;
};

export default function TeamComponent({ team }: any) {
  const { id, name, full_name } = team;
  const { setShowSpecificTeam, setSpecificTeamID } = useContext(TeamsContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setSpecificTeamID(parseInt(e.currentTarget.id));
    setShowSpecificTeam(true);
  };
  return (
    <div id={id.toString()} className="team" onClick={handleClick}>
      <img src={getLogoSourcePATH(name)} />
      <span className="text-name">{full_name}</span>
    </div>
  );
}
