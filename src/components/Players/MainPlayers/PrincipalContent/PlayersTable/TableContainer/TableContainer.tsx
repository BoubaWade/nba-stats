import { headerPlayerTableItems } from "../../../../../../config/constants";
import TableHeader from "../../../../../reusable-ui/TableHeader";
import TableBody from "../TableBody";

export default function TableContainer() {
  return (
    <div className="table-container">
      <table>
        <TableHeader datas={headerPlayerTableItems} />
        <TableBody />
      </table>
    </div>
  );
}
