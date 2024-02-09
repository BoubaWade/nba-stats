import { Game } from "../../../../teamsTypes";
import InfosHomeTeam from "./InfosHomeTeam";
import InfosVisitorTeam from "./InfosVisitorTeam";
type TeamsInfosProps = {
  game: Game;
};

export default function TeamsInfos({ game }: TeamsInfosProps) {
  const { home_team, visitor_team } = game;

  return (
    <div className="teams-infos-container">
      <InfosHomeTeam team={home_team} />
      <span>VS</span>
      <InfosVisitorTeam team={visitor_team} />
    </div>
  );
}
