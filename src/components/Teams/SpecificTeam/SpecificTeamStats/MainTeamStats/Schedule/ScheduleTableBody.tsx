import { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import ScheduleTableRow from "./ScheduleTableRow";

export default function ScheduleTableBody() {
  const { allGamesByTeam } = useContext(GlobalContext);

  return (
    <tbody>
      {allGamesByTeam.map((game) => (
        <ScheduleTableRow game={game} />
      ))}
    </tbody>
  );
}
