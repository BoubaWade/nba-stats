import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import { getAllGamesByTeam } from "../../../../service/apiCall";
import { idLimitOfListTeamsNBA } from "../../../../config/constants";

export default function TableBody() {
  const { teams, setTeamFullName, setTeamStatsDisplayed, setAllGamesByTeam } =
    useContext(GlobalContext);
  const nbaTeamsList = teams.filter((team) => team.id <= idLimitOfListTeamsNBA);

  const handleClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    const teamId = parseInt(e.currentTarget.id);
    getAllGamesByTeam(teamId, setAllGamesByTeam);
    setTeamStatsDisplayed(true);
    setTeamFullName(e.currentTarget.textContent);
  };

  return (
    <tbody>
      {nbaTeamsList.map((team) => (
        <tr key={team.id}>
          <td id={team.id.toString()} onClick={handleClick}>
            <img src={`/public/images/teamsLogos/${team.name}.svg`} />
            {team.full_name}
          </td>
          <td>{team.conference}</td>
          <td>{team.division}</td>
          <td>{team.city}</td>
          <td>{team.abbreviation}</td>
        </tr>
      ))}
    </tbody>
  );
}
