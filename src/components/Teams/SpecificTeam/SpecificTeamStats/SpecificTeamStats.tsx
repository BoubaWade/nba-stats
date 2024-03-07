import "./specificTeamStats.css";
import MainTeamStats from "./MainTeamStats/MainTeamStats";
import TeamStatsBanner from "./TeamStatsBanner/TeamStatsBanner";

export default function SpecificTeamStats() {
  return (
    <div className="team-stats">
      <TeamStatsBanner />
      <MainTeamStats />
    </div>
  );
}
