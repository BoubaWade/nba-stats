import { Game } from "../../Teams/teamsTypes";
import GameStatus from "../GameStatus";
import LogoAndName from "../LogoAndName/LogoAndName";

type CurrentGameCardProps = {
  game: Game;
};

export default function CurrentGameCard({ game }: CurrentGameCardProps) {
  const { id, visitor_team, home_team, status } = game;

  return (
    <li key={id} className="preview-game-card">
      <LogoAndName
        className="logo-name"
        name={visitor_team.name}
        classNameImage="image"
      />
      <GameStatus status={status} />
      <LogoAndName
        className="logo-name"
        name={home_team.name}
        classNameImage="image"
      />
    </li>
  );
}
