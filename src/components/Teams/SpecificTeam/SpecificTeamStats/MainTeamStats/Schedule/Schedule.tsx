import "./schedule.css";
import TableHeader from "../../../../../reusable-ui/TableHeader";
import "./schedule.css";
import ScheduleTableBody from "./ScheduleTableBody";
import { scheduleTableHeaderFields } from "../../../../../../config/config";

export default function Schedule() {
  return (
    <div className="table-container">
      <table>
        <TableHeader datas={scheduleTableHeaderFields} />
        <ScheduleTableBody />
      </table>
    </div>
  );
}
