import TableHeader from "../../../../reusable-ui/TableHeader";
import { tableHeaderStatsFields } from "../../../../../config/config";
import StatsTableBody from "./StatsTableBody";

export default function StatsTable() {
  return (
    <div className="table-container">
      <table>
        <TableHeader datas={tableHeaderStatsFields} />
        <StatsTableBody />
      </table>
    </div>
  );
}
