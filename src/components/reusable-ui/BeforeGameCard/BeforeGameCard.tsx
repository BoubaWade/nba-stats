import "./beforeGameCard.css";
import DateAndTime from "../DateAndTime";
import LogoAndName from "../LogoAndName/LogoAndName";
import { Game } from "../../Teams/teamsTypes";

type BeforeGameCardProps = {
  game: Game;
};
export default function BeforeGameCard({ game }: BeforeGameCardProps) {
  const { id, visitor_team, home_team, status } = game;

  return (
    <li key={id} className="preview-game-card">
      <LogoAndName
        className="logo-name"
        name={visitor_team.name}
        classNameImage="image"
      />
      <DateAndTime status={status} />
      <LogoAndName
        className="logo-name"
        name={home_team.name}
        classNameImage="image"
      />
    </li>
  );
}
