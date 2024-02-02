import { useContext, useEffect, useState } from "react";
import { TeamsContext } from "../../../../contexts/teamsContext";
import { Game } from "../../teamsTypes";
import { getGames } from "../../../../service/apiCall";
import GameCard from "./GameCard/GameCard";
import { gatGamesSortedByDate } from "../../../../helpers/players";
import Header from "./Header/Header";

export default function MainSpecificTeam() {
  const { specificTeamID } = useContext(TeamsContext);
  const [games, setGames] = useState<Game[]>([]);
  const gamesSortedByDate = gatGamesSortedByDate(games);

  useEffect(() => {
    getGames(specificTeamID, 2023, setGames);
  }, []);

  return (
    <div className="main-specificTeam">
      <Header />
      <ul className="list-games-cards">
        {gamesSortedByDate.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}
