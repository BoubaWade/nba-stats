import { STATUS_AFTER_GAME } from "../../../../../config/constants";
import GameCard from "../../../../Teams/SpecificTeam/MainSpecificTeam/ListGameCard/GameCard/GameCard";
import { Game } from "../../../../Teams/teamsTypes";
import LogoAndName from "../../../../reusable-ui/LogoAndName/LogoAndName";
import DateAndTime from "./DateAndTime";

type GameListItemProps = {
  game: Game;
};

export default function PreviewGameCard({ game }: GameListItemProps) {
  const { visitor_team, home_team, period, status } = game;

  if (status === STATUS_AFTER_GAME) return <GameCard game={game} />;

  return (
    <li className="preview-game-card">
      <LogoAndName
        className="logo-name"
        name={visitor_team.name}
        classNameImage="image"
      />
      <DateAndTime period={period} status={status} />
      <LogoAndName
        className="logo-name"
        name={home_team.name}
        classNameImage="image"
      />
    </li>
  );
}
