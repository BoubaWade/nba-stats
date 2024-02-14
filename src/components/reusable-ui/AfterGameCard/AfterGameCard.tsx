import "./afterGameCard.css";
import React from "react";
import { getDateFormated } from "../../../helpers/games";
import TeamsInfos from "./TeamsInfos";
import Scores from "./Scores";
import { Game } from "../../Teams/teamsTypes";
type AfterGameCardProps = {
  game: Game;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  isWinned?: boolean;
};
export default function AfterGameCard({
  game,
  onClick,
  isWinned,
}: AfterGameCardProps) {
  const dateFormatted = getDateFormated(game.date);

  return (
    <div
      key={game.id}
      id={game.id.toString()}
      className={`after-game-card ${isWinned ? "winned" : "losed"}`}
      onClick={onClick}
    >
      <p className="date">{dateFormatted}</p>
      <TeamsInfos game={game} />
      <Scores game={game} />
    </div>
  );
}
