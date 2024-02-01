import { getDateFormated } from "../../../../../helpers/players";
import { Game } from "../../../teamsTypes";
import InfosTeamLeft from "./InfosTeamLeft";
import InfosTeamRight from "./InfosTeamRight";
import Scores from "./Scores";
type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  const dateFormatted = getDateFormated(game.date);

  return (
    <div key={game.id} className="game-card">
      <p className="date">{dateFormatted}</p>
      <div className="teams-infos-container">
        <InfosTeamLeft game={game} />
        <span>VS</span>
        <InfosTeamRight game={game} />
      </div>
      <Scores game={game} />
    </div>
  );
}
