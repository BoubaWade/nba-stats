import "./specificTeamStats.css";
import MainTeamStats from "./MainTeamStats/MainTeamStats";
import TeamStatsBanner from "./TeamStatsBanner/TeamStatsBanner";
import BannerSkeleton from "./TeamStatsBanner/BannerSkeleton/BannerSkeleton";
import { useEffect, useState } from "react";

export default function SpecificTeamStats() {
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="team-stats">
      {loading ? <BannerSkeleton /> : <TeamStatsBanner />}
      <MainTeamStats />
    </div>
  );
}
