import "./statistics.css";

export default function Statistics() {
  return (
    <div className="statistics-container">
      <div className="graphs">
        <div className="circle-graph-container">CirleGraph</div>
        <div className="line-graph-container">LineGraph</div>
      </div>
      <div className="statistics-table-container">Table</div>
    </div>
  );
}
