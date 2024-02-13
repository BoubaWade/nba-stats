import React, { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import { filterGamesByStatus } from "../../../../../helpers/games";
import { Game } from "../../../../Teams/teamsTypes";

type FilterGamesProps = {
  onFilterGames: (games: Game[]) => void;
};

export default function FilterGames({ onFilterGames }: FilterGamesProps) {
  const { games } = useContext(GlobalContext);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const textContent = e.currentTarget.textContent;
    const gamesFiltered = filterGamesByStatus(games, textContent);
    if (gamesFiltered) onFilterGames(gamesFiltered);
  };

  return (
    <div>
      Filtrer par :
      <ul>
        <li onClick={handleClick}>Afficher tout</li>
        <li onClick={handleClick}>À venir</li>
        <li onClick={handleClick}>En cours...</li>
        <li onClick={handleClick}>Terminés</li>
      </ul>
    </div>
  );
}
