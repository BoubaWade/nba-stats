import { Game } from "../../../../teamsTypes";
import useGameCard from "../../../../../../hooks/useGameCard";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import { getGameStats } from "../../../../../../service/apiCall";
import PreviewGameCard from "../../../../../Games/MainGames/AllGames/GamesList/PreviewGameCard";
import { STATUS_AFTER_GAME } from "../../../../../../config/constants";
import AfterGameCard from "../../../../../reusable-ui/AfterGameCard/AfterGameCard";

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  const { winned } = useGameCard(game);
  const { id, status } = game;
  const { setGameStats, setShowAllGames } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    getGameStats(parseInt(e.currentTarget.id), setGameStats);
    setShowAllGames(false);
    navigate("/games");
  };

  if (status !== STATUS_AFTER_GAME) return <PreviewGameCard game={game} />;
  return (
    <AfterGameCard
      key={id}
      game={game}
      onClick={handleClickCard}
      isWinned={winned}
    />
  );
}
