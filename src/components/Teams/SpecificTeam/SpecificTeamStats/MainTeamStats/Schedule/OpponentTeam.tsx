import { useContext } from "react";
import { Game } from "../../../../teamsTypes";
import { GlobalContext } from "../../../../../../contexts/globalContext";

type OpponentTeamProps = {
  game: Game;
};

export default function OpponentTeam({ game }: OpponentTeamProps) {
  const { teamFullName } = useContext(GlobalContext);

  return (
    <td>
      {game.home_team.full_name === teamFullName
        ? VisitorTeam(game)
        : HomeTeam(game)}
    </td>
  );
}

const VisitorTeam = (game: Game) => {
  return (
    <div className="team-visitor">
      <span>VS</span>
      <img src={`/images/teamsLogos/${game.visitor_team.name}.svg`} />
      <span> {game.visitor_team.abbreviation}</span>
    </div>
  );
};
const HomeTeam = (game: Game) => {
  return (
    <div className="team-home">
      <span>@</span>
      <img src={`/images/teamsLogos/${game.home_team.name}.svg`} />
      <span> {game.home_team.abbreviation}</span>
    </div>
  );
};
