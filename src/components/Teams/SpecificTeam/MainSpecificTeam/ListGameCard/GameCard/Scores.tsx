import { Game } from "../../../../teamsTypes";

type ScoresProps = {
  game: Game;
};
export default function Scores({ game }: ScoresProps) {
  return (
    <div className="scores">
      <p className="score">{game.home_team_score}</p>
      <p className="score">{game.visitor_team_score}</p>
    </div>
  );
}
