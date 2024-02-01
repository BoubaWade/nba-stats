import { useContext, useEffect, useState } from "react";
import { TeamsContext } from "../../../../contexts/teamsContext";
import { Game } from "../../teamsTypes";
import { getGames } from "../../../../service/apiCall";
import GameCard from "./GameCard/GameCard";

export default function MainSpecificTeam() {
  const { specificTeamID } = useContext(TeamsContext);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getGames(specificTeamID, 2023, setGames);
  }, []);

  return (
    <div className="main-specificTeam">
      <ul className="list-games-cards">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}
