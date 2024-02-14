import "../../../../../animations/gamesAnimations.css";
import PreviewGameCard from "./PreviewGameCard";
import { Game } from "../../../../Teams/teamsTypes";
import { CSSTransition, TransitionGroup } from "react-transition-group";
type GamesListProps = {
  gamesToDisplay: Game[];
};

export default function GamesList({ gamesToDisplay }: GamesListProps) {
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
