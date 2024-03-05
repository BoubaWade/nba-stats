import { headerTeamsTableItems } from "../../../../config/constants";
import TableHeader from "../../../reusable-ui/TableHeader";
import TableBody from "./TableBody";

export default function TableTeams() {
  return (
    <div className="table-container">
      <h2>Statistiques par équipe</h2>
      <table>
        <TableHeader datas={headerTeamsTableItems} />
        <TableBody />
      </table>
    </div>
  );
}
