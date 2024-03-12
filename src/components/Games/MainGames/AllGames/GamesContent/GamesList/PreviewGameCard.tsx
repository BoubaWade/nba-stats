import { Game } from "../../../../../Teams/teamsTypes";
import AfterGameCard from "../../../../../reusable-ui/AfterGameCard/AfterGameCard";
import BeforeGameCard from "../../../../../reusable-ui/BeforeGameCard/BeforeGameCard";
import CurrentGameCard from "../../../../../reusable-ui/CurrentGameCard/CurrentGameCard";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import { getGameStats } from "../../../../../../service/apiCall";
import { useContext } from "react";
import {
  PERIOD_CURRENT_GAME,
  STATUS_AFTER_GAME,
} from "../../../../../../config/constants";
import { useNavigate } from "react-router-dom";
import { handleActiveButtonClicked } from "../../../../../../helpers/games";

type GameListItemProps = {
  game: Game;
};

export default function PreviewGameCard({ game }: GameListItemProps) {
  const {
    setGameStats,
    setShowAllGames,
    setStatGameCardDisplayed,
    setIsActiveNavButton,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClickAfterGameCard = (e: React.MouseEvent<HTMLDivElement>) => {
    getGameStats(parseInt(e.currentTarget.id), setGameStats);
    setShowAllGames(false);
    navigate("/games");
    setStatGameCardDisplayed(false);
    // Pour activer la couleur du bouton "Games" sur la barre de navigation
    handleActiveButtonClicked(setIsActiveNavButton, "isGamesNavButton");

    ("isGamesNavButton");
  };

  if (
    PERIOD_CURRENT_GAME.includes(game.period) &&
    game.time !== STATUS_AFTER_GAME
  )
    return <CurrentGameCard game={game} />;

  if (game.status === STATUS_AFTER_GAME)
    return <AfterGameCard game={game} onClick={handleClickAfterGameCard} />;

  return <BeforeGameCard game={game} />;
}
