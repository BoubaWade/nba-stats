import { useContext, useEffect, useState } from "react";
import { TeamsContext } from "../../../../contexts/teamsContext";
import { Game } from "../../teamsTypes";
import { getGames } from "../../../../service/apiCall";
import GameCard from "./GameCard/GameCard";
import { getGamesSortedByDate } from "../../../../helpers/games";
import Header from "./Header/Header";

export default function MainSpecificTeam() {
  const { specificTeamID, yearOfTheGames } = useContext(TeamsContext);
  const [games, setGames] = useState<Game[]>([]);
  const gamesSortedByDate = getGamesSortedByDate(games);

  useEffect(() => {
    getGames(specificTeamID, parseInt(yearOfTheGames), setGames);
  }, [yearOfTheGames]);

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
