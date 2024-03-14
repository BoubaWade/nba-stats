import { useEffect, useState } from "react";
import TeamComponent from "./TeamComponent";
import TeamSkeleton from "./TeamSkeleton/TeamSkeleton";
import { Team } from "../../Players/playersTypes";

export default function DivisionTeam({ division }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="division">
      {division.map((team: Team) => (
        <>
          {loading ? (
            <TeamSkeleton key={team.name} />
          ) : (
            <TeamComponent key={team.id} team={team} />
          )}
        </>
      ))}
    </div>
  );
}
