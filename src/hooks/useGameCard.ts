import { useContext, useEffect, useState } from "react";
import { Game } from "../components/Teams/teamsTypes";
import { TeamsContext } from "../contexts/teamsContext";

export default function useGameCard(game: Game) {
  const [winned, setWinned] = useState(false);
  const { teamFullName } = useContext(TeamsContext);
  const { home_team, visitor_team, home_team_score, visitor_team_score } = game;

  useEffect(() => {
    const difference = home_team_score - visitor_team_score;
    if (
      (difference > 0 && home_team.full_name === teamFullName) ||
      (difference < 0 && visitor_team.full_name === teamFullName)
    ) {
      setWinned(true);
    }
  }, []);
  return { winned };
}
