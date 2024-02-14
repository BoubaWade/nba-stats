import { Game } from "../../Teams/teamsTypes";

type ScoresProps = {
  game: Game;
};
export default function Scores({ game }: ScoresProps) {
  const { home_team_score, visitor_team_score } = game;

  return (
    <div className="scores">
      <p className="score">{home_team_score}</p>
      <p className="score">{visitor_team_score}</p>
    </div>
  );
}
