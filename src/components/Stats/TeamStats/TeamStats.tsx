import "./teamStats.css";
import TeamStatsBanner from "./TeamStatsBanner/TeamStatsBanner";
import MainTeamStats from "./MainTeamStats/MainTeamStats";

export default function TeamStats() {
  return (
    <div className="team-stats">
      <TeamStatsBanner />
      <MainTeamStats />
    </div>
  );
}
