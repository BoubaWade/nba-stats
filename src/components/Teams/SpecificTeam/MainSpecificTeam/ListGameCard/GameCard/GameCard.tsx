import { getDateFormated } from "../../../../../../helpers/games";
import { Game } from "../../../../teamsTypes";
import InfosHomeTeam from "./InfosHomeTeam";
import InfosVisitorTeam from "./InfosVisitorTeam";
import Scores from "./Scores";
import useGameCard from "../../../../../../hooks/useGameCard";
import React from "react";
import { getStatsGame } from "../../../../../../service/apiCall";
import { useNavigate } from "react-router-dom";
type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  const dateFormatted = getDateFormated(game.date);
  const { winned } = useGameCard(game);
  const navigate = useNavigate();

  const handleClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    getStatsGame(parseInt(e.currentTarget.id));
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
