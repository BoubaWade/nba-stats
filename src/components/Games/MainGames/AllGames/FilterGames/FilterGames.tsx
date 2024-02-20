import "./filterGames.css";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import {
  filterGamesByStatus,
  handleActiveButtonClicked,
} from "../../../../../helpers/games";
import { Game } from "../../../../Teams/teamsTypes";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";
import { getButtonsConfig } from "../../../../../config/config";

type FilterGamesProps = {
  onFilterGames: (games: Game[]) => void;
  getButtonLabel: (str: string | null) => void;
};

const initialStateActive = {
  isAllGames: true,
  isBeforeGames: false,
  isCurrentGames: false,
  isAfterGames: false,
};

export default function FilterGames({
  onFilterGames,
  getButtonLabel,
}: FilterGamesProps) {
  const { games, dateRangeForAllGames } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState(initialStateActive);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const textContent = e.currentTarget.textContent;
    const gamesFiltered = filterGamesByStatus(games, textContent);
    if (gamesFiltered) onFilterGames(gamesFiltered);
    // Pour récuperer le label du bouton cliqué
    getButtonLabel(textContent);
    // Activation de la couleur de fond du bouton cliqué
    handleActiveButtonClicked(setIsActive, e.currentTarget.name);
  };

  // Réactivation du bouton "AllGames" avec la classe "active-button" quand on séléction à nouveau une date
  useEffect(() => {
    setIsActive(initialStateActive);
  }, [dateRangeForAllGames]);

  const buttonsConfig = getButtonsConfig(isActive);

  return (
    <div className="filter-container">
      <p className="filter-label">Filtres</p>
      <ul className="filter-games-buttons-list">
        {buttonsConfig.map(({ key, label, active }) => (
          <PrimaryButton
            key={key}
            className={active}
            name={key}
            onClick={handleClick}
            label={label}
          />
        ))}
      </ul>
    </div>
  );
}
