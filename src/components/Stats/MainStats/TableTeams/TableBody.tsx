import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import { idLimitOfListTeamsNBA } from "../../../../config/constants";
import TableTeamsRow from "./TableTeamsRow";

export default function TableBody() {
  const { teams } = useContext(GlobalContext);
  const nbaTeamsList = teams.filter((team) => team.id <= idLimitOfListTeamsNBA);

  return (
    <tbody>
      {nbaTeamsList.map((team) => (
        <TableTeamsRow key={team.id} team={team} />
      ))}
    </tbody>
  );
}
