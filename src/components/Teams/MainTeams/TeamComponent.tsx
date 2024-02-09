import { useContext } from "react";
import { Team } from "../../Players/playersTypes";
import { GlobalContext } from "../../../contexts/globalContext";
const getLogoPATH = (name: string) => {
  return `../../../../public/images/${name}.svg`;
};
type TeamComponentProps = {
  team: Team;
};
export default function TeamComponent({ team }: TeamComponentProps) {
  const { id, name, full_name } = team;
  const { setSpecificTeamID, setShowSpecificTeam, setTeamFullName } =
    useContext(GlobalContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setSpecificTeamID(parseInt(e.currentTarget.id));
    setTeamFullName(e.currentTarget.textContent);
    setShowSpecificTeam(true);
  };

  return (
    <div className="team">
      <img src={getLogoPATH(name)} />
      <span className="text-name" id={id.toString()} onClick={handleClick}>
        {full_name}
      </span>
    </div>
  );
}
