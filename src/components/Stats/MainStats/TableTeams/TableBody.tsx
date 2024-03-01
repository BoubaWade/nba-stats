import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";

export default function TableBody() {
  const { teams, setTeamStatsDisplayed } = useContext(GlobalContext);
  const nbaTeamsList = teams.filter((team) => team.id < 31);

  const handleTeamStats = (e: React.MouseEvent<HTMLTableCellElement>) => {
    console.log(e.currentTarget.id);
    setTeamStatsDisplayed(true);
  };

  return (
    <tbody>
      {nbaTeamsList.map((team) => (
        <tr key={team.id}>
          <td id={team.id.toString()} onClick={(e) => handleTeamStats(e)}>
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
