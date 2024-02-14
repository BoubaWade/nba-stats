import { Game } from "../../Teams/teamsTypes";
import InfosHomeTeam from "../../Teams/SpecificTeam/MainSpecificTeam/ListGameCard/GameCard/InfosHomeTeam";
import InfosVisitorTeam from "../../Teams/SpecificTeam/MainSpecificTeam/ListGameCard/GameCard/InfosVisitorTeam";
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
