import "./mainTeamStats.css";
import { useContext } from "react";
import InnerNav from "../InnerNav/InnerNav";
import Schedule from "../Schedule/Schedule";
import Statistics from "../Statistics/Statistics";
import { GlobalContext } from "../../../../contexts/globalContext";

export default function MainTeamStats() {
  const { innerStatsNavButtons } = useContext(GlobalContext);
  const { isRosterActive, isScheduleActive, isStatsActive } =
    innerStatsNavButtons;

  return (
    <div className="main-team-stats">
      <InnerNav />
      {isRosterActive && <div>Roster</div>}
      {isScheduleActive && <Schedule />}
      {isStatsActive && <Statistics />}
    </div>
  );
}
