import "./mainStats.css";
import { useContext } from "react";
import TableTeams from "./TableTeams/TableTeams";
import { GlobalContext } from "../../../contexts/globalContext";
import Loader from "../../reusable-ui/Loader/Loader";
import TeamStats from "../TeamStats/TeamStats";

export default function MainStats() {
  const { teams, teamStatsDisplayed } = useContext(GlobalContext);

  if (teams.length === 0) return <Loader className="table-teams-loader" />;
  return (
    <div className="main-stats">
      {teamStatsDisplayed ? <TeamStats /> : <TableTeams />}
    </div>
  );
}
