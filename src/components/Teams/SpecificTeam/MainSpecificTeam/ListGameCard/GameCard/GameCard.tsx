import { getDateFormated } from "../../../../../../helpers/games";
import { Game } from "../../../../teamsTypes";
import Scores from "./Scores";
import useGameCard from "../../../../../../hooks/useGameCard";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import { getGameStats } from "../../../../../../service/apiCall";
import TeamsInfos from "./TeamsInfos";
import PreviewGameCard from "../../../../../Games/MainGames/AllGames/GamesList/PreviewGameCard";
import { STATUS_AFTER_GAME } from "../../../../../../config/constants";

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  const { winned } = useGameCard(game);
  const { id, date, status } = game;
  const { setGameStats, setShowAllGames } = useContext(GlobalContext);
  const dateFormatted = getDateFormated(date);
  const navigate = useNavigate();

  const handleClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    getGameStats(parseInt(e.currentTarget.id), setGameStats);
    setShowAllGames(false);
    navigate("/games");
  };

  if (status !== STATUS_AFTER_GAME) return <PreviewGameCard game={game} />;
  return (
    <div
      key={id}
      id={id.toString()}
      className={winned ? "game-card winned" : "game-card losed"}
      onClick={handleClickCard}
    >
      <p className="date">{dateFormatted}</p>
      <TeamsInfos game={game} />
      <Scores game={game} />
    </div>
  );
}
