import "../../../../../animations/gamesAnimations.css";
import { useContext, useEffect } from "react";
import {
  getStartAndEndDateRange,
  sortDescendingByDate,
} from "../../../../../helpers/games";
import { getSpecificTeamGames } from "../../../../../service/apiCall";
import GameCard from "./GameCard/GameCard";
import { GlobalContext } from "../../../../../contexts/globalContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EmptyGamesList from "../../../../reusable-ui/EmptyGamesList/EmptyGamesList";

export default function ListGameCard() {
  const {
    specificTeamGames,
    setSpecificTeamGames,
    specificTeamID,
    dateRangeForSpecificTeamGames,
  } = useContext(GlobalContext);
  const gamesSortedByDate = sortDescendingByDate(specificTeamGames);

  useEffect(() => {
    const dateRange = getStartAndEndDateRange(dateRangeForSpecificTeamGames);

    if (dateRange) {
      const { startDate, endDate } = dateRange;
      const searchParams = {
        teamId: specificTeamID,
        startDate: startDate,
        endDate: endDate,
      };
      getSpecificTeamGames(searchParams, setSpecificTeamGames);
    }
  }, [dateRangeForSpecificTeamGames]);

  if (gamesSortedByDate.length === 0)
    return <EmptyGamesList className="empty-specificTeamsGames" />;

  return (
    <TransitionGroup className="list-games-cards">
      {gamesSortedByDate.map((game) => (
        <CSSTransition
          key={game.id}
          timeout={1000}
          classNames="game-card"
          appear={true}
        >
          <GameCard key={game.id} game={game} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
