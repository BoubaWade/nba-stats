import { useContext } from "react";
import { TeamsContext } from "../../../contexts/teamsContext";
import { Team } from "../../Players/playersTypes";
const getLogoSourcePATH = (name: string) => {
  return `../../../../public/images/${name}.svg`;
};
type TeamComponentProps = {
  team: Team;
};
export default function TeamComponent({ team }: TeamComponentProps) {
  const { id, name, full_name } = team;
  const { setShowSpecificTeam, setSpecificTeamID, setTeamFullName } =
    useContext(TeamsContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setSpecificTeamID(parseInt(e.currentTarget.id));
    setTeamFullName(e.currentTarget.textContent);
    setShowSpecificTeam(true);
  };
  return (
    <div className="team">
      <img src={getLogoSourcePATH(name)} />
      <span className="text-name" id={id.toString()} onClick={handleClick}>
        {full_name}
      </span>
    </div>
  );
}
