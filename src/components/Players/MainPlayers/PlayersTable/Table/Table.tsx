import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table() {
  return (
    <div className="table-container">
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
