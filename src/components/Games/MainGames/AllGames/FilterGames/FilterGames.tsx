import "./filterGames.css";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../contexts/globalContext";
import { filterGamesByStatus } from "../../../../../helpers/games";
import { Game } from "../../../../Teams/teamsTypes";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";

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

    const handleActiveButtonClicked = (name: string) => {
      setIsActive((prevState) => {
        const updatedState = { ...prevState };

        Object.keys(updatedState).map((key) => {
          if (key !== name) {
            updatedState[key] = false;
          }
        });

        updatedState[name] = true;

        return updatedState;
      });
    };
    handleActiveButtonClicked(e.currentTarget.name);
  };

  // Réactivation du bouton "AllGames" avec la classe "active-button" quand on séléction à nouveau une date
  useEffect(() => {
    setIsActive(initialStateActive);
  }, [dateRangeForAllGames]);

  return (
    <div className="filter-container">
      <p className="filter-label">Filtres</p>
      <ul className="filter-games-buttons-list">
        <PrimaryButton
          className={isActive.isAllGames ? "active-button" : ""}
          name="isAllGames"
          onClick={handleClick}
          label="Tous les matchs"
        />
        {/* <button
          className={isActive.isAllGames ? "active-button" : ""}
          name="isAllGames"
          onClick={handleClick}
        >
          Afficher tout
        </button> */}
        <PrimaryButton
          className={isActive.isBeforeGames ? "active-button" : ""}
          name="isBeforeGames"
          onClick={handleClick}
          label="À venir"
        />
        {/* <button
          className={isActive.isBeforeGames ? "active-button" : ""}
          name="isBeforeGames"
          onClick={handleClick}
        >
          À venir
        </button> */}
        <PrimaryButton
          className={isActive.isCurrentGames ? "active-button" : ""}
          name="isCurrentGames"
          onClick={handleClick}
          label="En cours..."
        />
        {/* <button
          className={isActive.isCurrentGames ? "active-button" : ""}
          name="isCurrentGames"
          onClick={handleClick}
        >
          En cours...
        </button> */}
        <PrimaryButton
          className={isActive.isAfterGames ? "active-button" : ""}
          name="isAfterGames"
          onClick={handleClick}
          label="Terminés"
        />
        {/* <button
          className={isActive.isAfterGames ? "active-button" : ""}
          name="isAfterGames"
          onClick={handleClick}
        >
          Terminés
        </button> */}
      </ul>
    </div>
  );
}
