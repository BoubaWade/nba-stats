import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import { getAllGamesByTeam } from "../../../../service/apiCall";
import { Team } from "../../../Players/playersTypes";

type NameAndLogoProps = {
  team: Team;
};

export default function NameAndLogo({ team }: NameAndLogoProps) {
  const { setTeamFullName, setTeamStatsDisplayed, setAllGamesByTeam } =
    useContext(GlobalContext);
  const { id, name, full_name } = team;

  const handleClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    const teamId = parseInt(e.currentTarget.id);
    getAllGamesByTeam(teamId, setAllGamesByTeam);
    setTeamStatsDisplayed(true);
    setTeamFullName(e.currentTarget.textContent);
  };

  return (
    <td id={id.toString()} onClick={handleClick}>
      <img src={`/public/images/teamsLogos/${name}.svg`} />
      <span>{full_name}</span>
    </td>
  );
}
