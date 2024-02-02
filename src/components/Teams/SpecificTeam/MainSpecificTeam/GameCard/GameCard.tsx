import { getDateFormated } from "../../../../../helpers/players";
import { Game } from "../../../teamsTypes";
import InfosHomeTeam from "./InfosHomeTeam";
import InfosVisitorTeam from "./InfosVisitorTeam";
import Scores from "./Scores";
import useGameCard from "../../../../../hooks/useGameCard";
type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  const dateFormatted = getDateFormated(game.date);
  const { winned } = useGameCard(game);

  return (
    <div key={game.id} className={winned ? "game-card winned" : "game-card"}>
      <p className="date">{dateFormatted}</p>
      <div className="teams-infos-container">
        <InfosHomeTeam game={game} />
        <span>VS</span>
        <InfosVisitorTeam game={game} />
      </div>
      <Scores game={game} />
    </div>
  );
}
