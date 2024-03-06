import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import { idLimitOfListTeamsNBA, nbaArenas } from "../../../../config/constants";
import TableTeamsRow from "./TableTeamsRow";
import { setTeamsWithArenas } from "../../../../helpers/teams";

export default function TableBody() {
  const { teams } = useContext(GlobalContext);

  const teamsWithArenas = setTeamsWithArenas(teams, nbaArenas);
  const nbaTeamsList = teamsWithArenas.filter(
    (team) => team.id <= idLimitOfListTeamsNBA
  );

  return (
    <tbody>
      {nbaTeamsList.map((team) => (
        <TableTeamsRow key={team.id} team={team} />
      ))}
    </tbody>
  );
}
