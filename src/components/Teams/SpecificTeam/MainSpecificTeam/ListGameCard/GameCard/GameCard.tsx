import { getDateFormated } from "../../../../../../helpers/games";
import { Game } from "../../../../teamsTypes";
import InfosHomeTeam from "./InfosHomeTeam";
import InfosVisitorTeam from "./InfosVisitorTeam";
import Scores from "./Scores";
import useGameCard from "../../../../../../hooks/useGameCard";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../../../../contexts/globalContext";
import { getGameStats } from "../../../../../../service/apiCall";
type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  const { winned } = useGameCard(game);
  const { setGameStats, setShowAllGames } = useContext(GlobalContext);
  const dateFormatted = getDateFormated(game.date);
  const navigate = useNavigate();

  const handleClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    getGameStats(parseInt(e.currentTarget.id), setGameStats);
    setShowAllGames(false);
    navigate("/games");
  };

  return (
    <div
      key={game.id}
      id={game.id.toString()}
      className={winned ? "game-card winned" : "game-card"}
      onClick={handleClickCard}
    >
      <p className="date">{dateFormatted}</p>
      <div className="teams-infos-container">
        <InfosHomeTeam game={game} />
        <span>VS</span>
        <InfosVisitorTeam game={game} />
      </div>
      <Scores game={game} />
    </div>
  );
}
