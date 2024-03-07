import "./mainTeamStats.css";
import { useContext } from "react";
import InnerTabs from "./InnerTabs/InnerTabs";
import Schedule from "./Schedule/Schedule";
import Statistics from "./Statistics/Statistics";
import { GlobalContext } from "../../../../../contexts/globalContext";

export default function MainTeamStats() {
  const { innerStatsTabsButtons } = useContext(GlobalContext);
  const { isRosterActive, isScheduleActive, isStatsActive } =
    innerStatsTabsButtons;

  return (
    <div className="main-team-stats">
      <InnerTabs />
      <div className="main-team-stats-container">
        {isRosterActive && <div>Roster</div>}
        {isScheduleActive && <Schedule />}
        {isStatsActive && <Statistics />}
      </div>
    </div>
  );
}
