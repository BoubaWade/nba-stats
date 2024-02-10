import GameCard from "../../../../Teams/SpecificTeam/MainSpecificTeam/ListGameCard/GameCard/GameCard";
import { Game } from "../../../../Teams/teamsTypes";
import LogoAndName from "../../../../reusable-ui/LogoAndName/LogoAndName";
import DateAndTime from "./DateAndTime";
const getLogoPATH = (name: string) => {
  return `../../../../../../public/images/${name}.svg`;
};
type GameListItemProps = {
  game: Game;
};

export default function PreviewGameCard({ game }: GameListItemProps) {
  const { visitor_team, home_team } = game;

  return (
    <li className="preview-game-card">
      <LogoAndName
        className="logo-name"
        src={getLogoPATH(visitor_team.name)}
        name={visitor_team.name}
        classNameImage="image"
      />
      <DateAndTime game={game} />
      <LogoAndName
        className="logo-name"
        src={getLogoPATH(home_team.name)}
        name={home_team.name}
        classNameImage="image"
      />
    </li>
  );
}
