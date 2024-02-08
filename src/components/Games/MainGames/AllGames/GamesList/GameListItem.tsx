import { Game } from "../../../../Teams/teamsTypes";
import LogoAndName from "../../../../reusable-ui/LogoAndName/LogoAndName";
import DateAndTime from "./DateAndTime";
const getLogoPATH = (name: string) => {
  return `../../../../../../public/images/${name}.svg`;
};
type GameListItemProps = {
  game: Game;
};

export default function GameListItem({ game }: GameListItemProps) {
  const { visitor_team, home_team } = game;
  return (
    <li className="game-card">
      <LogoAndName
        className="visitor-team"
        src={getLogoPATH(visitor_team.name)}
        name={visitor_team.name}
      />
      <DateAndTime />
      <LogoAndName
        className="home-team"
        src={getLogoPATH(home_team.name)}
        name={home_team.name}
      />
    </li>
  );
}
