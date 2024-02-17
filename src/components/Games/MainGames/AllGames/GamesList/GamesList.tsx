import "../../../../../animations/gamesAnimations.css";
import PreviewGameCard from "./PreviewGameCard";
import { Game } from "../../../../Teams/teamsTypes";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EmptyGamesList from "../../../../reusable-ui/EmptyGamesList/EmptyGamesList";
import { uncapitalize } from "../../../../../helpers/games";

type GamesListProps = {
  gamesToDisplay: Game[];
  buttonLabel: string;
};

export default function GamesList({
  gamesToDisplay,
  buttonLabel,
}: GamesListProps) {
  if (gamesToDisplay.length === 0)
    return <EmptyGamesList label={uncapitalize(buttonLabel)} />;

  return (
    <TransitionGroup className="list-games-container">
      {gamesToDisplay.map((game, index) => (
        <CSSTransition
          key={index}
          timeout={index * 200}
          classNames="preview-game-card"
          appear={true}
        >
          <PreviewGameCard key={game.id} game={game} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
